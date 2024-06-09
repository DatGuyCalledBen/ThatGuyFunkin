// game.js

// Load character data from character.js
initializeCharacter('rasazyV3', scene).then(() => {
  console.log('Character initialized');
  // Start the game loop
  gameLoop(scene);
});

function gameLoop(scene) {
  let keysPressed = {};

  document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
  });

  document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
  });

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

  let animationName = getCharacterAnimation();
  let frameIndex = 0;
  const fps = window.characterData.animations.find(anim => anim.anim === animationName).fps;
  const frameDuration = 1000 / fps;

  function stepAndAnimate() {
    animationName = getCharacterAnimation();
    step(scene, 'rasazyV3', animationName, frameIndex);
    frameIndex = (frameIndex + 1) % window.characterData.animations.find(anim => anim.anim === animationName).indices.length;
    setTimeout(stepAndAnimate, frameDuration);
  }

  stepAndAnimate();
}
