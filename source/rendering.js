// rendering.js

function renderCharacter(scene, characterName, animationName, frameIndex) {
  const characterData = window.characterData;

  // Check if character data exists and contains animations
  if (!characterData || !characterData.animations || characterData.animations.length === 0) {
    console.error('Invalid character data:', characterData);
    return;
  }

  // Find the animation by name
  const animation = characterData.animations.find(anim => anim.anim === animationName);

  // Check if the animation exists and has frames
  if (!animation || !animation.frames || animation.frames.length === 0) {
    console.error('Invalid animation data or missing frames:', animation);
    return;
  }

  // Check if frameIndex is within the range of frames
  if (frameIndex < 0 || frameIndex >= animation.frames.length) {
    console.error('Invalid frame index:', frameIndex);
    return;
  }

  const spriteManager = new BABYLON.SpriteManager('spriteManager', `assets/images/${characterName}/character.png`, 1, 128, scene);
  const sprite = new BABYLON.Sprite(`${characterName}_${animationName}_${frameIndex}`, spriteManager);

  sprite.position = new BABYLON.Vector3(frameData.x, frameData.y, 0);
  sprite.size = new BABYLON.Vector3(frameData.width, frameData.height, 0);
  sprite.cellIndex = frameIndex;

  sprite.playAnimation(0, animation.frames.length - 1, false, 1000 / animation.fps);
}

function renderHealthBarIcon(scene, characterName) {
  const iconPath = `assets/images/${characterName}/character-icon.png`;
  const iconMaterial = new BABYLON.StandardMaterial("iconMaterial", scene);
  iconMaterial.diffuseTexture = new BABYLON.Texture(iconPath, scene);

  const icon = BABYLON.MeshBuilder.CreatePlane("healthBarIcon", { width: 5, height: 5 }, scene);
  icon.material = iconMaterial;
  icon.position = new BABYLON.Vector3(10, 10, 0); // Example position
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
