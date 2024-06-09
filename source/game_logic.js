function step(scene, characterName, animationName, frameIndex) {
    renderCharacter(scene, characterName, animationName, frameIndex);
    renderHealthBarIcon(scene, characterName);
    renderScore(scene);
}

function gameLoop(scene) {
    let keysPressed = {};
    let score = 0;

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
    });

    document.addEventListener('keyup', (event) => {
        keysPressed[event.key] = false;
    });

    function getCharacterAnimation() {
        if (keysPressed['ArrowLeft']) {
            return 'singLEFT';
        } else if (keysPressed['ArrowRight']) {
            return 'singRIGHT';
        } else if (keysPressed['ArrowUp']) {
            return 'singUP';
        } else if (keysPressed['ArrowDown']) {
            return 'singDOWN';
        } else {
            return 'idle';
        }
    }

    let characterName = 'rasazyV3';
    let animationName = getCharacterAnimation();
    let frameIndex = 0;
    const fps = window.characterData.animations.find(anim => anim.anim === animationName).fps;
    const frameDuration = 1000 / fps;

    function stepAndAnimate() {
        animationName = getCharacterAnimation();
        step(scene, characterName, animationName, frameIndex);
        frameIndex = (frameIndex + 1) % window.characterData.animations.find(anim => anim.anim === animationName).indices.length;
        setTimeout(stepAndAnimate, frameDuration);
    }

    stepAndAnimate();
}
