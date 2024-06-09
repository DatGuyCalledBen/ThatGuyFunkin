function renderCharacter(scene, characterName, animationName, frameIndex) {
  const imagePath = `assets/images/${characterName}/character.PNG`;
  const xmlPath = `assets/images/${characterName}/character.xml`;

  // Load the character's texture atlas image
  BABYLON.SceneLoader.ImportMesh("", "", imagePath, scene, function (newMeshes) {
    const character = newMeshes[0];
    
    // Parse the XML file to extract animation data
    fetch(xmlPath)
      .then(response => response.text())
      .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        
        // Extract subtexture data for the specified animation
        const animationFrames = xmlDoc.querySelectorAll(`SubTexture[name^='${animationName}']`);
        
        // Define animation frames based on subtexture data
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
        
        // Set up animation frames using the extracted data
        const animation = new BABYLON.AnimationGroup(`${animationName}AnimationGroup`);
        frames.forEach((frame, index) => {
          const spriteName = `${characterName} ${frame.name}`;
          const position = new BABYLON.Vector3(frame.frameX, frame.frameY, 0);
          const size = new BABYLON.Vector3(frame.frameWidth, frame.frameHeight, 0);
          
          // Create sprite from texture atlas
          const sprite = new BABYLON.Sprite(spriteName, character);
          sprite.position = position;
          sprite.size = size;
          
          // Add sprite to animation
          const keyFrame = new BABYLON.Animation(`${animationName}KeyFrame${index}`, 'position', 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
          keyFrame.setKeys([{ frame: index, value: position }]);
          animation.addTargetedAnimation(keyFrame, sprite);
        });
        
        // Play the animation
        animation.play(true);
      });
  });
}

function renderHealthBarIcon(scene, characterName) {
  const iconPath = `assets/images/${characterName}/healthbar-icon-for-character.PNG`;
  const iconMaterial = new BABYLON.StandardMaterial("iconMaterial", scene);
  iconMaterial.diffuseTexture = new BABYLON.Texture(iconPath, scene);

  const icon = BABYLON.MeshBuilder.CreatePlane("healthBarIcon", { width: 5, height: 5 }, scene);
  icon.material = iconMaterial;
  icon.position = new BABYLON.Vector3(10, 10, 0); // Example position
}

function renderScore(scene) {
  const scoreText = new BABYLON.GUI.TextBlock();
  scoreText.text = `Score: ${window.score}`;
  scoreText.color = "white";
  scoreText.fontSize = 30;
  scoreText.top = "10px";
  scoreText.left = "10px";
  scene.addControl(scoreText);
}
