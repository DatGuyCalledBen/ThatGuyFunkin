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
    .then(() => {
      console.log('Character initialized successfully');
      // Trigger idle animation
      triggerAnimation('idle');
    })
    .catch(error => {
      console.error('Error initializing character:', error);
    });

  // Run the game loop
  engine.runRenderLoop(() => {
    scene.render();
  });
});

function triggerAnimation(animationName) {
  // Simulate key press for the specified animation
  console.log(`Triggering animation: ${animationName}`);
  // Assuming this function can interact with the current game state to change animations
  // You might need to set some global state or call a function that updates the animation
}
