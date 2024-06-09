// animation.js

import { loadSubtextureData, findSubTextureByName } from './subtexture.js';

async function animateCharacter(scene, characterName, animationName) {
  try {
    // Load subtexture data
    const subtextureData = await loadSubtextureData(`assets/images/${characterName}/character.xml`);

    // Find subtextures for the animation
    const animationFrames = Object.keys(subtextureData)
      .filter(name => name.startsWith(animationName))
      .map(name => subtextureData[name]);

    // Create sprite manager
    const spriteManager = createSpriteManager(scene, characterName, animationFrames.length);

    // Create sprites and add animations
    createSpritesAndAnimations(scene, spriteManager, animationFrames);

  } catch (error) {
    console.error('Error animating character:', error);
  }
}

function createSpriteManager(scene, characterName, capacity) {
  const imagePath = `assets/images/${characterName}/character.png`;
  return new BABYLON.SpriteManager('spriteManager', imagePath, capacity, 128, scene);
}

function createSpritesAndAnimations(scene, spriteManager, animationFrames) {
  const animation = new BABYLON.AnimationGroup('animationGroup');

  animationFrames.forEach((frame, index) => {
    const frameName = `Frame${index}`;
    const sprite = new BABYLON.Sprite(frameName, spriteManager);
    setupSprite(sprite, frame);
    setupAnimation(animation, sprite, frame, index);
  });

  animation.play(true);
}

function setupSprite(sprite, frame) {
  sprite.cellIndex = 0;
  sprite.position.x = frame.x;
  sprite.position.y = frame.y;
  sprite.size = new BABYLON.Vector3(frame.width, frame.height, 1);
  sprite.cellWidth = frame.width;
  sprite.cellHeight = frame.height;
}

function setupAnimation(animation, sprite, frame, index) {
  const keyFrame = new BABYLON.Animation(`KeyFrame${index}`, 'position', 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  keyFrame.setKeys([{ frame: index, value: new BABYLON.Vector3(frame.frameX, frame.frameY, 0) }]);
  animation.addTargetedAnimation(keyFrame, sprite);
}

function renderHealthBarIcon(scene, characterName) {
  const iconPath = `assets/images/${characterName}/character-icon.png`;
  const iconMaterial = new BABYLON.StandardMaterial("iconMaterial", scene);
  iconMaterial.diffuseTexture = new BABYLON.Texture(iconPath, scene);

  const icon = BABYLON.MeshBuilder.CreatePlane("healthBarIcon", { width: 5, height: 5 }, scene);
  icon.material = iconMaterial;
  icon.position = new BABYLON.Vector3(10, 10, 0);
}

function renderScore(scene) {
  const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  const scoreText = new BABYLON.GUI.TextBlock();
  scoreText.text = `Score: ${window.score}`;
  scoreText.color = "white";
  scoreText.fontSize = 30;
  scoreText.top = "10px";
  scoreText.left = "10px";

  advancedTexture.addControl(scoreText);
}

export { animateCharacter, renderHealthBarIcon, renderScore };
