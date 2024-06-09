import { initializeCharacter } from './character.js';

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

  // Load character and initialize animations
  initializeCharacter('rasazyV3', scene)
    .then(character => {
      console.log('Character initialized successfully');
      // Position the character on top of a platform
      character.position.y = 2; // Adjust the height as needed
      character.position.x = 8; // Adjust the position as needed
      character.position.z = -3; // Adjust the position as needed
      // Trigger idle animation
      triggerAnimation('idle', character, scene);
    })
    .catch(error => {
      console.error('Error initializing character:', error);
    });

  // Create platforms and stage polygons
  createEnvironment(scene);

  // Load character icon texture
  const characterIconTexture = new BABYLON.Texture('assets/images/rasazyV3/character-icon.png', scene);
  characterIconTexture.hasAlpha = true;

  // Create a sprite to represent the character icon
  const characterIconSprite = new BABYLON.Sprite('characterIconSprite', characterIconTexture, scene);
  characterIconSprite.size = 5; // Adjust the size as needed
  characterIconSprite.position.y = 3; // Position the sprite above the platform
  characterIconSprite.position.x = -5; // Adjust the position as needed
  characterIconSprite.position.z = 5; // Adjust the position as needed

  // Run the game loop
  engine.runRenderLoop(() => {
    scene.render();
  });
});

function triggerAnimation(animationName, character, scene) {
  // Simulate key press for the specified animation
  console.log(`Triggering animation: ${animationName}`);
  // Assuming this function can interact with the current game state to change animations
  // You might need to set some global state or call a function that updates the animation
  character.playAnimation(animationName); // Assuming there's a playAnimation method in your character class
}

function createEnvironment(scene) {
  // Create platforms
  const platformMaterial = new BABYLON.StandardMaterial('platformMaterial', scene);
  platformMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  const platform1 = BABYLON.MeshBuilder.CreateBox('platform1', { width: 5, height: 1, depth: 5 }, scene);
  platform1.position.y = 0.5;

  const platform2 = BABYLON.MeshBuilder.CreateBox('platform2', { width: 8, height: 1, depth: 3 }, scene);
  platform2.position.y = 2;

  // Create stage polygons
  const stageMaterial = new BABYLON.StandardMaterial('stageMaterial', scene);
  stageMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);

  const stage = BABYLON.MeshBuilder.CreateGround('stage', { width: 20, height: 10 }, scene);

  // Apply materials
  platform1.material = platformMaterial;
  platform2.material = platformMaterial;
  stage.material = stageMaterial;

  // Position platforms and stage
  platform1.position.x = -5;
  platform1.position.z = 5;

  platform2.position.x = 8;
  platform2.position.z = -3;

  stage.position.y = -0.5;
}
