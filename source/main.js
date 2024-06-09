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

  // Load animations from JSON file and initialize character
  loadAnimationData('assets/images/rasazyV3/character.json')
    .then(animationData => {
      window.characterData = animationData;
      checkAnimationData(animationData);
      return initializeCharacter('rasazyV3', scene);
    })
    .then(() => {
      gameLoop(scene);

      // Simulate user input for testing
      setTimeout(() => {
        triggerAnimation('singLEFT'); // Simulate left movement
      }, 1000);

      setTimeout(() => {
        triggerAnimation('singRIGHT'); // Simulate right movement
      }, 3000);

      setTimeout(() => {
        triggerAnimation('singUP'); // Simulate up movement
      }, 5000);

      setTimeout(() => {
        triggerAnimation('singDOWN'); // Simulate down movement
      }, 7000);

      setTimeout(() => {
        triggerAnimation('idle'); // Simulate idle state
      }, 9000);
    })
    .catch(err => {
      console.error('Error loading animation data or initializing character:', err);
    });
});

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
    if (!animation.name || !animation.indices || !animation.frameWidth || !animation.frameHeight) {
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

function initializeCharacter(characterName, scene) {
  return Promise.all([
    loadCharacterData(characterName),
    loadCharacterAnimations(characterName)
  ]).then(([characterData, jsonData]) => {
    if (!jsonData || !jsonData.animations || !jsonData.image) {
      throw new Error('Invalid character animation data: Missing required fields');
    }

    // Check if animation data is an array
    if (!Array.isArray(jsonData.animations)) {
      throw new Error('Invalid character animation data: Animations field must be an array');
    }

    // Check if the image path is a string
    if (typeof jsonData.image !== 'string') {
      throw new Error('Invalid character animation data: Image field must be a string');
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
        throw new Error('Invalid animation data: Indices field must be an array');
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
