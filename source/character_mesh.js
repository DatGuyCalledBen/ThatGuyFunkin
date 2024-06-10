import { loadSubtextureData } from './subtexture.js';
import { createSpritesAndAnimations } from './animation.js';

async function initializeCharacterMesh(characterName, scene) {
  try {
    console.log(`Initializing character mesh: ${characterName}`);

    // Load subtexture data
    const subtextureData = await loadSubtextureData(`assets/images/${characterName}/character.xml`);
    console.log(`Subtexture data for ${characterName}:`, subtextureData);

    // Check if the idle animation exists in the subtexture data
    if (!subtextureData[`${characterName} idle0000`]) {
      throw new Error(`No frames found for idle animation`);
    }

    // Find subtextures for the idle animation
    const idleAnimationFrames = Object.keys(subtextureData)
      .filter(name => name.startsWith(`${characterName} idle`))
      .map(name => subtextureData[name]);

    console.log(`Idle animation frames:`, idleAnimationFrames);

    // Create sprite manager for the character
    const spriteManager = createSpriteManager(scene, characterName, idleAnimationFrames.length);
    console.log('Sprite manager created:', spriteManager);

    // Create sprites and add animations for the idle animation
    const sprite = createSpritesAndAnimations(scene, spriteManager, idleAnimationFrames);
    console.log('Idle animation sprites and animations created successfully');

    // Return the sprite (assuming createSpritesAndAnimations returns the created sprite)
    return sprite;

  } catch (error) {
    console.error('Error initializing character mesh:', error);
    throw error;
  }
}

function createSpriteManager(scene, characterName, capacity) {
  const imagePath = `assets/images/${characterName}/character.png`;
  console.log(`Creating sprite manager with image path: ${imagePath} and capacity: ${capacity}`);
  return new BABYLON.SpriteManager('spriteManager', imagePath, capacity, 128, scene);
}

export { initializeCharacterMesh };
