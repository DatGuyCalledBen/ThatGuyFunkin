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

async function initializeCharacter(characterName, scene) {
  try {
    await Promise.all([
      loadCharacterData(characterName),
      loadSubtextureData(`assets/images/${characterName}/character.xml`)
    ]);

    animateCharacter(scene, characterName, 'idle');
  } catch (error) {
    console.error('Error initializing character:', error);
  }
}

export { initializeCharacter };
