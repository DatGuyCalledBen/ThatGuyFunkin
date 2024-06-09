// animation.js

import { loadSubtextureData, findSubTextureByName } from './subtexture.js';

async function animateCharacter(scene, characterName, animationName) {
  try {
    console.log(`Animating character: ${characterName} with animation: ${animationName}`);
    
    // Load subtexture data
    const subtextureData = await loadSubtextureData(`assets/images/${characterName}/character.xml`);
    console.log(`Subtexture data for ${characterName}:`, subtextureData);

    // Find subtextures for the animation
    const animationFrames = Object.keys(subtextureData)
      .filter(name => name.startsWith(animationName))
      .map(name => subtextureData[name]);

    if (animationFrames.length === 0) {
      throw new Error(`No frames found for animation: ${animationName}`);
    }

    console.log(`Animation frames for ${animationName}:`, animationFrames);

    // Create sprite manager
    const spriteManager = createSpriteManager(scene, characterName, animationFrames.length);
    console.log('Sprite manager created:', spriteManager);

    // Create sprites and add animations
    createSpritesAndAnimations(scene, spriteManager, animationFrames);
    console.log('Sprites and animations created successfully');

  } catch (error) {
    console.error('Error animating character:', error);
  }
}

function createSpriteManager(scene, characterName, capacity) {
  const imagePath = `assets/images/${characterName}/character.png`;
  console.log(`Creating sprite manager with image path: ${imagePath} and capacity: ${capacity}`);
  return new BABYLON.SpriteManager('spriteManager', imagePath, capacity, 128, scene);
}

function createSpritesAndAnimations(scene, spriteManager, animationFrames) {
  const animation = new BABYLON.AnimationGroup('animationGroup');

  animationFrames.forEach((frame, index) => {
    const frameName = `Frame${index}`;
    console.log(`Creating sprite for frame: ${frameName} with data:`, frame);
    const sprite = new BABYLON.Sprite(frameName, spriteManager);
    setupSprite(sprite, frame);
    setupAnimation(animation, sprite, frame, index);
  });

  animation.play(true);
  console.log('Animation group played:', animation);
}

function setupSprite(sprite, frame) {
  console.log(`Setting up sprite with frame data:`, frame);
  sprite.cellIndex = 0;
  sprite.position.x = frame.x;
  sprite.position.y = frame.y;
  sprite.size = new BABYLON.Vector3(frame.width, frame.height, 1);
  sprite.cellWidth = frame.width;
  sprite.cellHeight = frame.height;
  console.log('Sprite set up:', sprite);
}

function setupAnimation(animation, sprite, frame, index) {
  console.log(`Setting up animation for sprite at index: ${index} with frame data:`, frame);
  const keyFrame = new BABYLON.Animation(`KeyFrame${index}`, 'position', 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  keyFrame.setKeys([{ frame: index, value: new BABYLON.Vector3(frame.frameX, frame.frameY, 0) }]);
  animation.addTargetedAnimation(keyFrame, sprite);
  console.log(`Key frame ${index} set up for animation:`, keyFrame);
}

function renderHealthBarIcon(scene, characterName) {
  const iconPath = `assets/images/${characterName}/character-icon.png`;
  const iconMaterial = new BABYLON.StandardMaterial("iconMaterial", scene);
  iconMaterial.diffuseTexture = new BABYLON.Texture(iconPath, scene);

  const icon = BABYLON.MeshBuilder.CreatePlane("healthBarIcon", { width: 5, height: 5 }, scene);
  icon.material = iconMaterial;
  icon.position = new BABYLON.Vector3(10, 10, 0);

  console.log('Health bar icon rendered:', icon);
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
  console.log('Score rendered:', scoreText);
}

export { animateCharacter, renderHealthBarIcon, renderScore };
