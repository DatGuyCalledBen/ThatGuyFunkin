import { loadCharacterData, loadCharacterAnimations } from './character.js';

document.addEventListener('DOMContentLoaded', () => {
  // Babylon.js scene setup
  const canvas = document.getElementById('gameCanvas');
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  // Create a camera
  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 3, 20, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  // Create a light
  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

  // Run the game loop
  engine.runRenderLoop(() => {
    scene.render();
  });

  // Load animations from JSON file and initialize character with self-healing mechanism
  initializeCharacterWithSelfHealing('rasazyV3', scene);
});

function initializeCharacterWithSelfHealing(characterName, scene) {
  const jsonPath = `assets/images/${characterName}/character.json`;

  // Function to load animation data with error handling
  const loadAnimationDataWithRetry = () => {
    loadAnimationData(jsonPath)
      .then(animationData => {
        window.characterData = animationData;
        checkAnimationData(animationData);
        return initializeCharacter(characterName, scene);
      })
      .catch(err => {
        console.error('Error loading animation data:', err);
        // Attempt to reload animation data after a delay
        setTimeout(loadAnimationDataWithRetry, 5000); // Retry after 5 seconds
      });
  };

  // Initial attempt to load animation data
  loadAnimationDataWithRetry();
}

function loadAnimationData(jsonPath) {
  return new Promise((resolve, reject) => {
    if (!jsonPath || typeof jsonPath !== 'string') {
      reject(new Error('Invalid JSON path provided'));
      return;
    }

    fetch(jsonPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${jsonPath}: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (!data || typeof data !== 'object') {
          throw new Error(`Failed to parse JSON data from ${jsonPath}: Data is not an object`);
        }
        resolve(data);
      })
      .catch(error => {
        reject(new Error(`Error loading animation data from ${jsonPath}: ${error.message}`));
      });
  });
}

function checkAnimationData(animationData) {
  if (!animationData || !animationData.animations || !animationData.image) {
    throw new Error('Invalid character animation data: Missing required fields');
  }

  // Check if animation data is an array
  if (!Array.isArray(animationData.animations)) {
    throw new Error('Invalid character animation data: Animations field must be an array');
  }

  // Check each animation for required fields
  animationData.animations.forEach(animation => {
    if (!animation.name || !animation.indices) {
      throw new Error('Invalid animation data: Missing required fields');
    }

    // Check if indices field is an array
    if (!Array.isArray(animation.indices)) {
      throw new Error('Invalid animation data: Indices field must be an array');
    }
  });

  // Check other required fields
  if (typeof animationData.image !== 'string') {
    throw new Error('Invalid character animation data: Image field must be a string');
  }
}

function initializeCharacter(characterName, scene) {
  return Promise.all([
    loadCharacterData(characterName),
    loadCharacterAnimations(characterName)
  ]).then(([characterData, jsonData]) => {
    // Check if jsonData is not null or undefined
    if (!jsonData) {
      throw new Error('Invalid character animation data: No data provided');
    }
    
    // Check if jsonData.animations is an array
    if (!Array.isArray(jsonData.animations)) {
      throw new Error(`Invalid character animation data: Animations field must be an array. Found: ${jsonData.animations}`);
    }
    
    // Check if jsonData.image is a string
    if (typeof jsonData.image !== 'string') {
      throw new Error(`Invalid character animation data: Image field must be a string. Found: ${jsonData.image}`);
    }
    
    // Check if characterData is not null or undefined
    if (!characterData) {
      throw new Error('Invalid character data: No data provided');
    }
    
    // Check if characterData.sing_duration is a number
    if (typeof characterData.sing_duration !== 'number') {
      throw new Error(`Invalid character data: Sing duration must be a number. Found: ${characterData.sing_duration}`);
    }

    // Create Babylon.js sprite manager
    const spriteManager = new BABYLON.SpriteManager('spriteManager', `assets/images/${jsonData.image}.png`, 1, 128, scene);

    // Create sprites for each animation
    jsonData.animations.forEach(animation => {
      // Check if animation object has required fields
      if (!animation.name || !animation.indices) {
        throw new Error('Invalid animation data: Missing required fields');
      }

      // Check if indices field is an array
      if (!Array.isArray(animation.indices)) {
        throw new Error(`Invalid animation data: Indices field must be an array. Found: ${animation.indices}`);
      }

      animation.indices.forEach(index => {
        const subTextureName = `${characterName} ${animation.anim}${index.toString().padStart(4, '0')}`;
        const subTexture = findSubTextureByName(subTextureName); // Function to find subtexture by name from the XML data
        if (!subTexture) {
          throw new Error(`Subtexture ${subTextureName} not found in XML data`);
        }

        const sprite = new BABYLON.Sprite(`${subTextureName}`, spriteManager);
        sprite.cellIndex = 0;
        sprite.position.x = subTexture.frameX;
        sprite.position.y = subTexture.frameY;
        sprite.size = new BABYLON.Vector3(subTexture.frameWidth, subTexture.frameHeight, 1);
        sprite.cellWidth = subTexture.frameWidth;
        sprite.cellHeight = subTexture.frameHeight;
        sprite.playAnimation(0, 1, true, 1000 / characterData.sing_duration);
        sprite.isVisible = false; // Hide sprites initially
      });
    });
  }).catch(error => {
    console.error('Error loading animation data or initializing character:', error);
  });
}


function triggerAnimation(animationName) {
  // Simulate key press for the specified animation
  console.log(`Triggering animation: ${animationName}`);
  // Assuming this function can interact with the current game state to change animations
  // You might need to set some global state or call a function that updates the animation
}
