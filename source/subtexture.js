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

    fetch(xmlPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${xmlPath}: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then(xmlText => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');

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

        resolve(SubtextureData);
      })
      .catch(error => {
        reject(new Error(`Error loading subtexture data from ${xmlPath}: ${error.message}`));
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