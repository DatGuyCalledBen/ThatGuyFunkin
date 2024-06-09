document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 3, 20, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

  engine.runRenderLoop(() => {
    scene.render();
  });

  initializeCharacter('rasazyV3', scene).then(() => {
    console.log('Character initialized');
    gameLoop(scene);
  });
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
