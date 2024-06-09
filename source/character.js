function loadCharacterData(characterName) {
  const jsonFile = `assets/images/${characterName}/character.json`;

  return fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      window.characterData = data;
      return data;
    });
}

function loadCharacterAnimations(characterName) {
  const xmlFile = `assets/images/${characterName}/character.xml`;

  return fetch(xmlFile)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'text/xml');
      const textures = xml.getElementsByTagName('SubTexture');

      let animations = {};
      for (let texture of textures) {
        const name = texture.getAttribute('name');
        const x = parseInt(texture.getAttribute('x'));
        const y = parseInt(texture.getAttribute('y'));
        const width = parseInt(texture.getAttribute('width'));
        const height = parseInt(texture.getAttribute('height'));
        const frameX = parseInt(texture.getAttribute('frameX'));
        const frameY = parseInt(texture.getAttribute('frameY'));
        const frameWidth = parseInt(texture.getAttribute('frameWidth'));
        const frameHeight = parseInt(texture.getAttribute('frameHeight'));

        animations[name] = { x, y, width, height, frameX, frameY, frameWidth, frameHeight };
      }

      window.characterAnimations = animations;
    });
}

function initializeCharacter(characterName, scene) {
  return Promise.all([
    loadCharacterData(characterName),
    loadCharacterAnimations(characterName)
  ]).then(() => {
    const spriteManager = new BABYLON.SpriteManager('spriteManager', `assets/images/${characterName}/character.png`, 1, 128, scene);

    Object.keys(window.characterAnimations).forEach(animationName => {
      const animation = window.characterAnimations[animationName];
      const sprite = new BABYLON.Sprite(`${animationName}`, spriteManager);
      sprite.cellIndex = 0;
      sprite.position.x = animation.x;
      sprite.position.y = animation.y;
      sprite.width = animation.width;
      sprite.height = animation.height;
      sprite.isVisible = false;
    });
  });
}
