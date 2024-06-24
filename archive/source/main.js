import { initializeCharacterMesh } from './character_mesh.js';

document.addEventListener('DOMContentLoaded', () => {
    // Babylon.js scene setup
    const canvas = document.getElementById('gameCanvas');
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Create a camera
    const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 3, 20, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    // Adjust the camera's position to focus on one of the platforms
    const platformPosition = new BABYLON.Vector3(0, 0.5, 0); // Position of the platform to focus on
    camera.setTarget(platformPosition); // Set camera target to the platform

    // Adjust the camera's radius and beta angle for better view
    camera.radius = 15; // Distance from the target
    camera.beta = Math.PI / 3; // Vertical rotation angle

    // Create a light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Create platforms and stage polygons
    createEnvironment(scene);

    // Load character and initialize animations
    initializeCharacterMesh('rasazyV3', scene)
        .then(spriteManager => {
            if (!spriteManager) {
                throw new Error('Sprite manager is undefined');
            }
            console.log('Character mesh initialized successfully');

            // Create a sprite for the character
            const sprite = new BABYLON.Sprite('character', spriteManager);
            sprite.isVisible = true;
            sprite.size = 5; // Set a visible size

            // Find the platform
            const platform = scene.getMeshByName('platform1');
            if (!platform) {
                throw new Error('Platform not found');
            }

            // Position the character sprite on top of the platform
            const platformBoundingBox = platform.getBoundingInfo().boundingBox;
            const platformTop = platformPosition.y + platformBoundingBox.maximum.y;
            sprite.position.copyFrom(platformPosition);
            sprite.position.y = platformTop + sprite.size / 2; // Adjust this as necessary

            // Log sprite position and properties
            console.log('Sprite position:', sprite.position);
            console.log('Sprite properties:', sprite);

            // Trigger idle animation
            triggerAnimation('idle', sprite, scene);
        })
        .catch(error => {
            console.error('Error initializing character mesh:', error);
        });

    // Run the game loop
    engine.runRenderLoop(() => {
        scene.render();
    });
});

function triggerAnimation(animationName, sprite, scene) {
    // Check if sprite or its animations property is undefined
    if (!sprite || !sprite.animations) {
        console.error('Character or animations not initialized.');
        return;
    }

    // Simulate key press for the specified animation
    console.log(`Triggering animation: ${animationName}`);

    // Find the animation with the matching name and play it
    sprite.animations.forEach(animation => {
        if (animation.name === animationName) {
            console.log(`Playing animation: ${animationName}`);
            console.log('Animation frames:', animation.getKeys());
            animation.start(true, 1.0, animation.from, animation.to);
        }
    });
}

function createEnvironment(scene) {
    // Create platforms
    const platformMaterial = new BABYLON.StandardMaterial('platformMaterial', scene);
    platformMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);

    const platform1 = BABYLON.MeshBuilder.CreateBox('platform1', { width: 5, height: 1, depth: 5 }, scene);
    platform1.position.y = 0.5;

    const platform2 = BABYLON.MeshBuilder.CreateBox('platform2', { width: 8, height: 1, depth: 3 }, scene);
    platform2.position.y = 2;

    // Create stage polygons
    const stageMaterial = new BABYLON.StandardMaterial('stageMaterial', scene);
    stageMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);

    const stage = BABYLON.MeshBuilder.CreateGround('stage', { width: 20, height: 10 }, scene);

    // Apply materials
    platform1.material = platformMaterial;
    platform2.material = platformMaterial;
    stage.material = stageMaterial;

    // Position platforms and stage
    platform1.position.x = -5;
    platform1.position.z = 5;

    platform2.position.x = 8;
    platform2.position.z = -3;

    stage.position.y = -0.5;
}
