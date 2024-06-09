// main.js

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
  Promise.all([
    loadAnimationData('assets/images/rasazyV3/character.json'),
    initializeCharacter('rasazyV3', scene)
  ]).then(([animationData]) => {
    // Set up character sprite animations
    const spriteManager = new BABYLON.SpriteManager('spriteManager', 'assets/images/rasazyV3/character.png', 1, 128, scene);

    animationData.animations.forEach(animation => {
      // Create a sprite for each animation
      const sprite = new BABYLON.Sprite(`${animation.anim}`, spriteManager);
      sprite.playAnimation(0, animation.indices.length - 1, animation.loop, 1000 / animation.fps);
      sprite.position = new BABYLON.Vector3(animation.offsets[0], animation.offsets[1], 0);
      sprite.isVisible = false; // Hide sprites initially
    });

    console.log('Character initialized');
    // Start the game loop
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
  });
});

function triggerAnimation(animationName) {
  // Simulate key press for the specified animation
  console.log(`Triggering animation: ${animationName}`);
}

function loadAnimationData(jsonPath) {
  // Load animation data from JSON file
  return fetch(jsonPath)
    .then(response => response.json())
    .then(data => data);
}
