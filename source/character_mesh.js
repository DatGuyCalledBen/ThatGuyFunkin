export function initializeCharacterMesh(characterName, scene) {
    return new Promise((resolve, reject) => {
        // Fetch and parse the subtexture data
        fetch(`assets/images/${characterName}/character.xml`)
            .then(response => response.text())
            .then(xmlText => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const subTextures = xmlDoc.getElementsByTagName('SubTexture');
                const subTextureData = {};

                for (let i = 0; i < subTextures.length; i++) {
                    const subTexture = subTextures[i];
                    const name = subTexture.getAttribute('name');
                    subTextureData[name] = {
                        x: parseInt(subTexture.getAttribute('x')),
                        y: parseInt(subTexture.getAttribute('y')),
                        width: parseInt(subTexture.getAttribute('width')),
                        height: parseInt(subTexture.getAttribute('height')),
                        frameX: parseInt(subTexture.getAttribute('frameX')),
                        frameY: parseInt(subTexture.getAttribute('frameY')),
                        frameWidth: parseInt(subTexture.getAttribute('frameWidth')),
                        frameHeight: parseInt(subTexture.getAttribute('frameHeight')),
                    };
                }

                console.log(`Subtexture data for ${characterName}:`, subTextureData);

                const idleAnimationFrames = [
                    subTextureData[`${characterName} idle0000`],
                    subTextureData[`${characterName} idle0001`],
                    subTextureData[`${characterName} idle0002`],
                    subTextureData[`${characterName} idle0003`],
                    subTextureData[`${characterName} idle0004`],
                    subTextureData[`${characterName} idle0005`],
                ];

                console.log(`Idle animation frames:`, idleAnimationFrames);

                // Create a sprite manager
                const spriteManager = new BABYLON.SpriteManager(
                    `${characterName}Manager`,
                    `assets/images/${characterName}/character.png`,
                    6,
                    1500,
                    scene
                );

                console.log('Sprite manager created:', spriteManager);

                // Initialize sprites and animations
                idleAnimationFrames.forEach((frameData, index) => {
                    const sprite = new BABYLON.Sprite(`idle${index}`, spriteManager);
                    sprite.width = frameData.width / 150;
                    sprite.height = frameData.height / 150;
                    sprite.position = new BABYLON.Vector3(-5, 5, 5);
                    sprite.isVisible = true;

                    console.log(`Setting up sprite with frame data:`, frameData);
                });

                resolve(spriteManager);
            })
            .catch(error => {
                reject(`Error fetching or parsing XML: ${error}`);
            });
    });
}
