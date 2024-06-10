import { initializeCharacterMesh } from './character_mesh.js';

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
  initializeCharacterMesh('rasazyV3', scene)
    .then(sprite => {
      console.log('Character mesh initialized successfully');

      // Position the sprite on one of the stages
      sprite.position = new BABYLON.Vector3(-5, 1.5, 5); // Adjust this as necessary

      // Trigger idle animation
      triggerAnimation('idle', sprite, scene);
    })
    .catch(error => {
      console.error('Error initializing character mesh:', error);
    });

  // Create platforms and stage polygons
  createEnvironment(scene);

  // Run the game loop
  engine.runRenderLoop(() => {
    scene.render();
  });
});

function triggerAnimation(animationName, sprite, scene) {
  // Check if sprite or its animations property is undefined
  if (!sprite || !sprite.animations) {
    console.error('Character or animations not initialized.');
    return;
  }

  // Simulate key press for the specified animation
  console.log(`Triggering animation: ${animationName}`);

  // Find the animation with the matching name and play it
  sprite.animations.forEach(animation => {
    if (animation.name === animationName) {
      animation.start(true, 1.0, animation.from, animation.to);
    }
  });
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
