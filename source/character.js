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
    });
}

async function loadCharacterAnimations(characterName) {
  try {
    // Load subtexture data
    const subtextureData = await loadSubtextureData(`assets/images/${characterName}/character.xml`);

    // Filter subtextures for animations
    const animationFrames = Object.keys(subtextureData)
      .filter(name => name.startsWith(characterName))
      .map(name => subtextureData[name]);

    // Store animation frames in window object or wherever needed
    window.characterAnimations = animationFrames;

    console.log('Character animations loaded successfully:', window.characterAnimations);

  } catch (error) {
    console.error('Error loading character animations:', error);
  }
}

async function initializeCharacter(characterName, scene) {
  try {
    await Promise.all([
      loadCharacterData(characterName),
      loadCharacterAnimations(characterName)
    ]);

    animateCharacter(scene, characterName, 'idle');
    
    console.log('Character initialized successfully');

  } catch (error) {
    console.error('Error initializing character:', error);
  }
}

export { loadCharacterData, loadCharacterAnimations, initializeCharacter };
