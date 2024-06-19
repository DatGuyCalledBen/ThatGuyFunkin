// game_logic.js

import { renderHealthBarIcon, renderScore } from './rendering.js';
import { animateCharacter } from './animation.js';

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

  // Initialize character name
  const characterName = 'rasazyV3';

  // Function to perform step and animate character
  function stepAndAnimate() {
    const animationName = getCharacterAnimation();
    animateCharacter(scene, characterName, animationName);

    setTimeout(stepAndAnimate, 100); // Adjust interval as needed
  }

  // Start the game loop
  stepAndAnimate();

  // Render the health bar icon and score
  renderHealthBarIcon(scene, characterName);
  renderScore(scene);
}

export { gameLoop };
