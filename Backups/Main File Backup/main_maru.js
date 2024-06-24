import { createScene } from './environment.js';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = createScene(engine, canvas);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    class SpriteSheet {
        constructor(url, frames, width, height) {
            this.url = url;
            this.frames = frames;
            this.width = width;
            this.height = height;
        }
    }
// don't forget to add the frameX or frameY value to the width and height!
    const spriteSheetData = [
        new SpriteSheet("down_sprite_sheet.png", 10, 600+750, 837),
        new SpriteSheet("right_sprite_sheet.png", 10, 593+750, 840), 
        new SpriteSheet("up_sprite_sheet.png", 10, 497+750, 876), 
        new SpriteSheet("left_sprite_sheet.png", 10, 591+750, 842),
        new SpriteSheet("idle.png", 1, 666+750, 920),
        new SpriteSheet("idle_sprite_sheet.png", 10, 593+750, 850),
    ];

    let currentSpriteSheetIndex = 5;
    let currentFrame = 0;
    let animationSpeed = 0.1;
    let isLoadingNextSpriteSheet = false;
    let isAudioStarted = false;

    let spriteManager = createSpriteManager(spriteSheetData[currentSpriteSheetIndex]);
    let sprite = new BABYLON.Sprite("sprite", spriteManager);
    sprite.position = new BABYLON.Vector3(-1.25, 2.45, 1.25);

    let defaultSpriteManager = createDefaultSpriteManager();
    let defaultSprite = new BABYLON.Sprite("defaultSprite", defaultSpriteManager);
    defaultSprite.isVisible = false;

    const audio = document.getElementById("backgroundMusic");
    let danceData;

    fetch('the-mmorpg-addict-39-s-anthem-ーネトゲ廃人シュプレヒコールー-scdler-vocals.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            danceData = validateDanceData(data);
            if (danceData.length === 0) {
                console.warn('No valid dance data found');
            }
            startAnimation();
            startSelfHealingCheck();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    function startAnimation() {
        try {
            // Calculate BPM and quantization factor
            const BPM = 175; // Example BPM (beats per minute), adjust as needed
            const quantizationFactor = 1024; // Example quantization factor (4 for quarter notes), adjust as needed
            
            // Calculate update frequency based on BPM and quantization factor
            const updateFrequency = 60 / (BPM * quantizationFactor);

            engine.runRenderLoop(() => {
                try {
                    if (!isLoadingNextSpriteSheet && spriteSheetData[currentSpriteSheetIndex]) {
                        currentFrame += animationSpeed;
                        if (currentFrame >= spriteSheetData[currentSpriteSheetIndex].frames) currentFrame = 0;

                        sprite.cellIndex = Math.floor(currentFrame);
                    }

                    scene.render();
                } catch (error) {
                    console.error('Error in render loop:', error);
                }
            });

            // Use setTimeout to control update frequency
            setTimeout(() => {
                updateSpriteBasedOnTime();
                startAnimation(); // Recursive call to maintain animation loop
            }, updateFrequency * 1000); // Convert seconds to milliseconds
        } catch (error) {
            console.error('Error starting animation:', error);
        }
    }

    window.addEventListener("resize", () => {
        try {
            engine.resize();
        } catch (error) {
            console.error('Error resizing engine:', error);
        }
    });

    function createSpriteManager(data) {
        try {
            if (!data) {
                return createDefaultSpriteManager(); // Get default data
            }
            return new BABYLON.SpriteManager("spriteManager", data.url, data.frames, { width: data.width, height: data.height }, scene);
        } catch (error) {
            console.error('Error creating sprite manager:', error);
            return createDefaultSpriteManager();
        }
    }

    function createDefaultSpriteManager() {
        try {
            return new BABYLON.SpriteManager("defaultSpriteManager", "idle.png", 1, { width: 593+750, height: 850 }, scene);
        } catch (error) {
            console.error('Error creating default sprite manager:', error);
            return null;
        }
    }

    function switchSprite(newSpriteSheetIndex) {
        try {
            if (currentSpriteSheetIndex === newSpriteSheetIndex) {
                return;
            }

            isLoadingNextSpriteSheet = true;
            defaultSprite.isVisible = true;
            sprite.isVisible = false;

            currentSpriteSheetIndex = newSpriteSheetIndex;
            const data = spriteSheetData[currentSpriteSheetIndex];

            loadSpriteSheet(data).then(() => {
                defaultSprite.isVisible = false;
                currentFrame = 0;
                isLoadingNextSpriteSheet = false;
            }).catch(error => {
                console.error('Error loading sprite sheet:', error);
            });
        } catch (error) {
            console.error('Error in switchSprite:', error);
        }
    }

    function loadSpriteSheet(data) {
        try {
            spriteManager = createSpriteManager(data);
            if (!spriteManager) {
                throw new Error('Failed to create sprite manager');
            }
            sprite.dispose(); // Dispose the current sprite instance
            sprite = new BABYLON.Sprite("sprite", spriteManager);
            sprite.position = new BABYLON.Vector3(-1.25, 2.45, 1.25);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    function updateSpriteBasedOnTime() {
        try {
            if (!danceData || !isAudioStarted) return;

            const currentTime = audio.currentTime * 1000; // Convert to milliseconds
            let spriteSwitched = false;

            for (let entry of danceData) {
                try {
                    if (currentTime >= entry.t && currentTime < (entry.t + entry.l)) {
                        switchSprite(entry.d);
                        spriteSwitched = true;
                        break;
                    }
                } catch (error) {
                    console.error('Error in loop iteration (updateSpriteBasedOnTime):', error);
                }
            }

            if (!spriteSwitched) {
                console.log('No sprite switch for time:', currentTime);
            }

            setTimeout(updateSpriteBasedOnTime, 0); // Use setTimeout to avoid blocking the main thread
        } catch (error) {
            console.error('Error in updateSpriteBasedOnTime:', error);
        }
    }

    function validateDanceData(data) {
        try {
            if (!Array.isArray(data)) {
                throw new Error('Dance data is not an array');
            }

            const validatedData = data.filter(entry => {
                if (!entry || typeof entry !== 'object') {
                    console.warn('Invalid entry in dance data:', entry);
                    return false;
                }
                if (typeof entry.t !== 'number' || typeof entry.d !== 'number' || typeof entry.l !== 'number') {
                    console.warn('Invalid data type in entry:', entry);
                    return false;
                }
                return true;
            });

            if (validatedData.length !== data.length) {
                console.warn('Some entries in dance data were invalid');
            }

            return validatedData;
        } catch (error) {
            console.error('Error in validateDanceData:', error);
            return [];
        }
    }

    function startSelfHealingCheck() {
        const intervalSeconds = 5; // Check every 5 seconds
        let lastSpriteSwitchTime = Date.now();

        setInterval(() => {
            try {
                const currentTime = Date.now();
                if (currentTime - lastSpriteSwitchTime > intervalSeconds * 1000) {
                    updateSpriteBasedOnTime(); // Restart the update function
                }
                lastSpriteSwitchTime = currentTime;
            } catch (error) {
                console.error('Error in self-healing check:', error);
            }
        }, intervalSeconds * 1000);
    }

    canvas.addEventListener('pointerdown', () => {
        try {
            if (!isAudioStarted) {
                audio.play().then(() => {
                    console.log('Audio playback started');
                }).catch(error => {
                    console.error("Audio playback failed:", error);
                });
                isAudioStarted = true;
            }
        } catch (error) {
            console.error('Error in pointerdown event:', error);
        }
    });

    // General error handling for unexpected exceptions
    document.addEventListener("error", function (event) {
        console.error("Unhandled error detected:", event.error);
    });
});