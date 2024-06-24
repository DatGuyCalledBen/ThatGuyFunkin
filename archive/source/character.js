// character.js

import { loadSubtextureData } from './subtexture.js';
import { animateCharacter } from './animation.js';

function loadCharacterData(characterName) {
  const jsonFile = `assets/images/${characterName}/character.json`;

  return fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      window.characterData = data;
      return data;
    })
    .catch(error => {
      console.error(`Error loading character data for ${characterName}:`, error);
      throw error;
    });
}

async function loadCharacterAnimations(characterName) {
  try {
    console.log(`Loading character animations for ${characterName}`);
    // Load subtexture data
    const subtextureData = await loadSubtextureData(`assets/images/${characterName}/character.xml`);
    console.log(`Subtexture data loaded for ${characterName}:`, subtextureData);

    // Filter subtextures for animations
    const animationFrames = Object.keys(subtextureData)
      .filter(name => name.startsWith(characterName))
      .map(name => subtextureData[name]);

    if (animationFrames.length === 0) {
      throw new Error(`No animation frames found for character: ${characterName}`);
    }

    // Store animation frames in window object or wherever needed
    window.characterAnimations = animationFrames;

    console.log('Character animations loaded successfully:', window.characterAnimations);

  } catch (error) {
    console.error('Error loading character animations:', error);
    throw error;
  }
}

async function initializeCharacter(characterName, scene) {
  try {
    console.log(`Initializing character: ${characterName}`);
    await Promise.all([
      loadCharacterData(characterName),
      loadCharacterAnimations(characterName)
    ]);

    console.log(`Character data and animations loaded for: ${characterName}`);

    animateCharacter(scene, characterName, 'idle');
    
    console.log('Character initialized successfully');

  } catch (error) {
    console.error('Error initializing character:', error);
  }
}

export { loadCharacterData, loadCharacterAnimations, initializeCharacter };
