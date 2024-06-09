function animateCharacter(scene, characterName, animationName) {
  const imagePath = `assets/images/${characterName}/character.png`;
  const xmlPath = `assets/images/${characterName}/character.xml`;

  fetch(xmlPath)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const animationFrames = xmlDoc.querySelectorAll(`SubTexture[name^='${animationName}']`);
      const frames = [];
      animationFrames.forEach(frame => {
        const frameData = {
          name: frame.getAttribute('name'),
          x: parseFloat(frame.getAttribute('x')),
          y: parseFloat(frame.getAttribute('y')),
          width: parseFloat(frame.getAttribute('width')),
          height: parseFloat(frame.getAttribute('height')),
          frameX: parseFloat(frame.getAttribute('frameX')),
          frameY: parseFloat(frame.getAttribute('frameY')),
          frameWidth: parseFloat(frame.getAttribute('frameWidth')),
          frameHeight: parseFloat(frame.getAttribute('frameHeight'))
        };
        frames.push(frameData);
      });

      const spriteManager = new BABYLON.SpriteManager('spriteManager', imagePath, frames.length, frames[0].frameWidth, scene);

      frames.forEach((frame, index) => {
        const sprite = new BABYLON.Sprite(frame.name, spriteManager);
        sprite.cellIndex = index;
        sprite.position.x = frame.x;
        sprite.position.y = frame.y;
        sprite.width = frame.width;
        sprite.height = frame.height;
        sprite.isVisible = true;
      });

      const animation = new BABYLON.AnimationGroup(`${animationName}AnimationGroup`);
      frames.forEach((frame, index) => {
        const keyFrame = new BABYLON.Animation(`${animationName}KeyFrame${index}`, 'position', 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        keyFrame.setKeys([{ frame: index, value: new BABYLON.Vector3(frame.frameX, frame.frameY, 0) }]);
        animation.addTargetedAnimation(keyFrame, spriteManager.sprites[index]);
      });

      animation.play(true);
    });
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
