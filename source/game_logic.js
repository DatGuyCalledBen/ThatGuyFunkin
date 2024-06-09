function step(scene, characterName, animationName, frameIndex) {
  // Render the character, health bar icon, and score
  renderCharacter(scene, characterName, animationName, frameIndex);
  renderHealthBarIcon(scene, characterName);
  renderScore(scene);
}

function gameLoop(scene) {
  // Initialize keysPressed object and score
  let keysPressed = {};
  window.score = 0;

  // Add event listeners for keydown and keyup events
  document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
  });

  document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
  });

  // Function to determine character animation based on pressed keys
  function getCharacterAnimation() {
    if (keysPressed['ArrowLeft']) {
      return 'singLEFT';
    } else if (keysPressed['ArrowRight']) {
      return 'singRIGHT';
    } else if (keysPressed['ArrowUp']) {
      return 'singUP';
    } else if (keysPressed['ArrowDown']) {
      return 'singDOWN';
    } else {
      return 'idle';
    }
  }

  // Initialize character name, animation name, and frame index
  let characterName = 'rasazyV3';
  let animationName = getCharacterAnimation();
  let frameIndex = 0;

  // Get animation data from window object
  const characterData = window.characterData;

  // Find FPS and frame duration for current animation
  const animation = characterData.animations.find(anim => anim.anim === animationName);
  if (!animation) {
    console.error('Animation not found:', animationName);
    return;
  }
  const fps = animation.fps;
  const frameDuration = 1000 / fps;

  // Function to perform step and animate character
  function stepAndAnimate() {
    animationName = getCharacterAnimation();
    step(scene, characterName, animationName, frameIndex);

    // Check if the animation exists
    const animation = characterData.animations.find(anim => anim.anim === animationName);
    if (!animation) {
      console.error('Animation not found:', animationName);
      return; // or handle this situation as needed
    }

    frameIndex = (frameIndex + 1) % animation.frames.length;
    setTimeout(stepAndAnimate, frameDuration);
  }

  // Start the game loop
  stepAndAnimate();
}
