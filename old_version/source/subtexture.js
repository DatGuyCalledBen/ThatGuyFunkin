// subtexture.js

// Define a global object to store subtexture data
const SubtextureData = {};

// Function to load subtexture data from XML file
function loadSubtextureData(xmlPath) {
  return new Promise((resolve, reject) => {
    if (!xmlPath || typeof xmlPath !== 'string') {
      reject(new Error('Invalid XML path provided'));
      return;
    }

    console.log(`Fetching XML from path: ${xmlPath}`);
    
    fetch(xmlPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${xmlPath}: ${response.status} ${response.statusText}`);
        }
        console.log(`Successfully fetched XML: ${xmlPath}`);
        return response.text();
      })
      .then(xmlText => {
        console.log('Parsing XML text...');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // Check if XML document contains subtexture data
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        if (!subTextures || subTextures.length === 0) {
          throw new Error('No subtexture data found in XML document');
        }

        // Parse subtexture data from XML
        console.log('Parsing subtexture data from XML...');
        for (let i = 0; i < subTextures.length; i++) {
          const subTexture = subTextures[i];
          const name = subTexture.getAttribute('name');
          const x = parseInt(subTexture.getAttribute('x'));
          const y = parseInt(subTexture.getAttribute('y'));
          const width = parseInt(subTexture.getAttribute('width'));
          const height = parseInt(subTexture.getAttribute('height'));
          const frameX = parseInt(subTexture.getAttribute('frameX'));
          const frameY = parseInt(subTexture.getAttribute('frameY'));
          const frameWidth = parseInt(subTexture.getAttribute('frameWidth'));
          const frameHeight = parseInt(subTexture.getAttribute('frameHeight'));

          console.log(`Read SubTexture: name=${name}, x=${x}, y=${y}, width=${width}, height=${height}, frameX=${frameX}, frameY=${frameY}, frameWidth=${frameWidth}, frameHeight=${frameHeight}`);

          SubtextureData[name] = {
            x,
            y,
            width,
            height,
            frameX,
            frameY,
            frameWidth,
            frameHeight
          };
        }

        // Check if subtexture data was successfully parsed
        if (Object.keys(SubtextureData).length === 0) {
          throw new Error('Failed to parse subtexture data from XML document');
        }

        console.log('Subtexture data parsed successfully:', SubtextureData);
        resolve(SubtextureData);
      })
      .catch(error => {
        console.error(`Error loading or parsing subtexture data from ${xmlPath}: ${error.message}`);
        reject(new Error(`Error loading or parsing subtexture data from ${xmlPath}: ${error.message}`));
      });
  });
}

// Function to find subtexture data by name
function findSubTextureByName(name) {
  if (!SubtextureData.hasOwnProperty(name)) {
    throw new Error(`Subtexture '${name}' not found`);
  }
  return SubtextureData[name];
}

// Export functions
export { loadSubtextureData, findSubTextureByName };
