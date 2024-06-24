export function createScene(engine, canvas) {
    const scene = new BABYLON.Scene(engine);
    const BPM = 70
    const QuantisationFactor = 1/16000
    // Default background color
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    // Add simple geometric buildings
    const building1 = BABYLON.MeshBuilder.CreateBox("building1", { width: 5, height: 10, depth: 5 }, scene);
    building1.position = new BABYLON.Vector3(5, 5, 6); // Position building
    const building1Material = new BABYLON.StandardMaterial("building1Material", scene);
    building1Material.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3); // Dark grey
    building1.material = building1Material;
    
    const building2 = BABYLON.MeshBuilder.CreateBox("building2", { width: 8, height: 15, depth: 8 }, scene);
    building2.position = new BABYLON.Vector3(9, 7.5, -8); // Position building
    const building2Material = new BABYLON.StandardMaterial("building2Material", scene);
    building2Material.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4); // Medium grey
    building2.material = building2Material;
    
    
    // Add lights
    const hemisphericLight = new BABYLON.HemisphericLight("hemisphericLight", new BABYLON.Vector3(0, 1, 0), scene);
    hemisphericLight.intensity = 0.7;
    
    const pointLight1 = new BABYLON.PointLight("pointLight1", new BABYLON.Vector3(3, 8, 0), scene);
    pointLight1.diffuse = new BABYLON.Color3(1, 0, 0); // Red light
    pointLight1.intensity = 0.5;
    
    const pointLight2 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(-2, 8, -2), scene);
    pointLight2.diffuse = new BABYLON.Color3(0, 0, 1); // Blue light
    pointLight2.intensity = 0.5;
    // Create ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // Medium grey for the ground
    ground.material = groundMaterial;

    // Add box (stage cube)
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position = new BABYLON.Vector3(-1.25, 1, 1.25); // Elevated position for the box
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
    boxMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // Medium grey
    box.material = boxMaterial;

    // Add pyramid
    const pyramid = BABYLON.MeshBuilder.CreateCylinder("pyramid", { diameterTop: 0, diameterBottom: 2, height: 3, tessellation: 4 }, scene);
    pyramid.position = new BABYLON.Vector3(3, 1.5, 3); // Elevated position for the pyramid
    const pyramidMaterial = new BABYLON.StandardMaterial("pyramidMaterial", scene);
    pyramidMaterial.diffuseColor = new BABYLON.Color3(0.25, 0.25, 0.25); // Dark grey
    pyramid.material = pyramidMaterial;

    // Add cone
    const cone = BABYLON.MeshBuilder.CreateCylinder("cone", { diameterTop: 0, diameterBottom: 2, height: 3, tessellation: 16 }, scene);
    cone.position = new BABYLON.Vector3(-3, 1.5, -3); // Elevated position for the cone
    const coneMaterial = new BABYLON.StandardMaterial("coneMaterial", scene);
    coneMaterial.diffuseColor = new BABYLON.Color3(0.75, 0.75, 0.75); // Light grey
    cone.material = coneMaterial;
    
    // Add massive cuboid (skyscraper)
    const skyscraper = BABYLON.MeshBuilder.CreateBox("skyscraper", { width: 7.5, height: 20, depth: 7.5 }, scene);
    skyscraper.position = new BABYLON.Vector3(-5.75, 10, 5.75); // Positioned     so that a quarter of it is on the ground
    const skyscraperMaterial = new BABYLON.StandardMaterial("skyscraperMaterial"    , scene);
    skyscraperMaterial.diffuseColor = new BABYLON.Color3(0.35, 0.35, 0.35); //     Dark grey for the skyscraper
    skyscraper.material = skyscraperMaterial;
    
    
    // Add tiny stairs
    const stepHeight = 0.05;
    const stepDepth = 0.1;
    const stepWidth = 3; // Increase the width of each step
    const numberOfSteps = Math.ceil(2 / stepHeight); // Calculate number of steps needed to cover double the height of the cube
    
    for (let i = 0; i < numberOfSteps; i++) {
        const step = BABYLON.MeshBuilder.CreateBox("step" + i, { width: stepWidth, height: stepHeight, depth: stepDepth }, scene);
        step.position = new BABYLON.Vector3(-3.5, 1.25 - (i * stepHeight), 1.75 - (i * stepDepth)); // Align steps with the cube, leave z constant and double the height
        const stepMaterial = new BABYLON.StandardMaterial("stepMaterial" + i, scene);
        stepMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // Medium grey
        step.material = stepMaterial;

    // Adjust position to move each step to the side
        step.position.x += (stepWidth - 2) / 2; // Center each step along the x-axis
    }

    // Main camera setup
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 50, new BABYLON.Vector3(-1.25, 2.5, 1.25), scene);
    camera.attachControl(canvas, true);

    // Define camera positions
    const cameraPositions = [
        // Theatrical angles
        { alpha: -Math.PI / 2, beta: Math.PI / 3, radius: 60 },   // Angle 1
        { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: 80 },   // Angle 2
        { alpha: -Math.PI / 3, beta: Math.PI / 3, radius: 50 },   // Angle 3
        { alpha: -Math.PI / 4, beta: Math.PI / 4, radius: 70 },   // Angle 4
        // Close-ups on the cube
        { alpha: 0, beta: Math.PI / 2, radius: 3 }, // Close-up from the side
        { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 3 }, // Close-up from another side
        { alpha: Math.PI, beta: Math.PI / 2, radius: 3 }, // Close-up from the back
        { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: 3 }, // Close-up from the front
        // Mid-range circling around the cube
        { alpha: 0, beta: Math.PI / 4, radius: 10 }, // Circling around 1
        { alpha: Math.PI / 2, beta: Math.PI / 4, radius: 10 }, // Circling around 2
        { alpha: Math.PI, beta: Math.PI / 4, radius: 10 }, // Circling around 3
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10 }, // Circling around 4
        // Perched on the cone
        { alpha: Math.PI / 4, beta: Math.PI / 4, radius: 7, position: new BABYLON.Vector3(-3, 3, -3) }, // Perched on the cone
        // Dutch angle
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 50, rotationOffset: Math.PI / 6 }, // Slight Dutch angle
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 50, rotationOffset: -Math.PI / 6 }, // Opposite Dutch angle
        // Tracking shot
        { alpha: 0, beta: Math.PI / 4, radius: 50, panPath: [new BABYLON.Vector3(0, 6, -12.5), new BABYLON.Vector3(0, 6, 2.5)] },
        // Over-the-shoulder
        { alpha: -Math.PI / 3, beta: Math.PI / 4, radius: 10, target: box.position },
        // Low angle looking up at the box
        { alpha: Math.PI / 6, beta: 3 * Math.PI / 4, radius: 5, target: box.position },
        // High angle looking down at the box
        { alpha: Math.PI / 3, beta: Math.PI / 6, radius: 8, target: box.position },
        // Zoom shots
        { alpha: 0, beta: Math.PI / 2, radius: 1.5 }, // Zoom close-up
        { alpha: Math.PI, beta: Math.PI / 2, radius: 1.5 }, // Zoom close-up reverse
        // Dolly shot
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, dollyPath: [new BABYLON.Vector3(-10, 2.5, -2), new BABYLON.Vector3(-1.25, 2.5, 1.25), new BABYLON.Vector3(10, 2.5, -2)] },
        // Truck shot
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, truckPath: [new BABYLON.Vector3(-2, 2.5, -10), new BABYLON.Vector3(-2, 2.5, 10)] },
        // New camera positions
        { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 100 }, // Overhead Shot
        { alpha: 0, beta: Math.PI / 6, radius: 5 }, // Worm's Eye View
        { alpha: 0, beta: Math.PI / 4, radius: 20, panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos(i * Math.PI / 180) * 20, 5 + i / 36, Math.sin(i * Math.PI / 180) * 20)) }, // Dynamic Spiral
        { alpha: 0, beta: Math.PI / 4, radius: 60, panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos(i * Math.PI / 180) * 60, 5, Math.sin(i * Math.PI / 180) * 60)) }, // Time-lapse Orbit
        { alpha: 0, beta: Math.PI / 2, radius: 50, zoomPath: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1] }, // Slow Zoom In/Out
        { alpha: 0, beta: Math.PI / 4, radius: 10, target: box.position }, // Tracking Shot Following an Object
        { alpha: 0, beta: Math.PI / 4, radius: 2, position: new BABYLON.Vector3(-3, 2, 3) }, // Interior View (First-Person Perspective)
        { alpha: Math.PI, beta: Math.PI / 4, radius: 10, position: new BABYLON.Vector3(0, 1, 0) }, // Reflection Shot
        { alpha: 0, beta: Math.PI / 2, radius: 50, panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos(i * Math.PI / 180) * 50, 10, Math.sin(i * Math.PI / 180) * 50)) }, // 360-Degree Panoramic View
        ];

    let currentCameraIndex = 0;
    let transitionTime = 60/(3*BPM*QuantisationFactor); // Transition time in milliseconds

    // Function to smoothly transition between camera positions
    function transitionToNextCamera() {
        const nextCameraIndex = getRandomInt(0, cameraPositions.length);
        const nextPosition = cameraPositions[nextCameraIndex];
    
        if (!nextPosition) {
            console.error('Next camera position is undefined or null.');
            return; // Exit function early if nextPosition is invalid
        }
    
        // Ensure nextPosition has necessary properties before accessing them
        if (nextPosition.alpha !== undefined && nextPosition.beta !== undefined     && nextPosition.radius !== undefined) {
            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera    , 'alpha', 60, 120, camera.alpha, nextPosition.alpha, BABYLON    .Animation.ANIMATIONLOOPMODE_CONSTANT);
            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera    , 'beta', 60, 120, camera.beta, nextPosition.beta, BABYLON    .Animation.ANIMATIONLOOPMODE_CONSTANT);
            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera    , 'radius', 60, 120, camera.radius, nextPosition.radius,     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, () => {
                currentCameraIndex = nextCameraIndex;
            });
    
            // Handle specific target for looking up angles or other customized     targets
            if (nextPosition.target) {
                camera.setTarget(nextPosition.target);
            } else {
                camera.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
            }
    
        // Handle specific position for perched angles
            if (nextPosition.position) {
                camera.position = nextPosition.position;
            }
    
            // Handle rotationOffset for Dutch angles
            if (nextPosition.rotationOffset) {
                camera.rotationOffset = nextPosition.rotationOffset;
            }
    
            // Handle panPath for tracking shots
            if (nextPosition.panPath) {
                panCameraAlongPath(nextPosition.panPath);
            }
    
            // Handle dollyPath for dolly shots
            if (nextPosition.dollyPath) {
                panCameraAlongPath(nextPosition.dollyPath);
            }
    
            // Handle truckPath for truck shots
            if (nextPosition.truckPath) {
                panCameraAlongPath(nextPosition.truckPath);
            }
        } else {
            console.error('Next camera position is missing required properties     (alpha, beta, radius).');
        }
    }


    // Function to pan the camera along a specified path
    function panCameraAlongPath(pathPoints) {
        const animation = new BABYLON.Animation("cameraPathAnimation", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        const keys = pathPoints.map((point, index) => ({ frame: index * 6000, value: point }));
        animation.setKeys(keys);

        camera.animations.push(animation);
        scene.beginAnimation(camera, 0, pathPoints.length * 6000, true);
    }

    // Function to add subtle camera shake to the corner cameras
    function shakeCamera(camera) {
        const shakeAnimation = new BABYLON.Animation("cameraShakeAnimation", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        shakeAnimation.setKeys([
            { frame: 0, value: camera.position.clone().add(new BABYLON.Vector3(0, 0.75, 0)) },
            { frame: 4000, value: camera.position.clone().add(new BABYLON.Vector3(0, 0.55, 0)) }
        ]);

        camera.animations.push(shakeAnimation);
        scene.beginAnimation(camera, 0, 4000, true);
    }

    // Fixed Position Cameras
    const fixedCamera1 = new BABYLON.FreeCamera("fixedCamera1", new BABYLON.Vector3(-5, 5.5, -5), scene);
    fixedCamera1.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
    shakeCamera(fixedCamera1); // Apply camera shake to fixedCamera1

    const fixedCamera2 = new BABYLON.FreeCamera("fixedCamera2", new BABYLON.Vector3(5, 0.5, -5), scene);
    fixedCamera2.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
    shakeCamera(fixedCamera2); // Apply camera shake to fixedCamera2
    
    // Additional fixed position cameras

    const fixedCamera3 = new BABYLON.FreeCamera("fixedCamera3", new BABYLON.Vector3(5, 2.5, 5), scene);
    fixedCamera3.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
    shakeCamera(fixedCamera3); // Apply camera shake to fixedCamera3

    const fixedCamera4 = new BABYLON.FreeCamera("fixedCamera4", new BABYLON.Vector3(-5, 5.5, 5), scene);
    fixedCamera4.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
    shakeCamera(fixedCamera4); // Apply camera shake to fixedCamera4

    const fixedCamera5 = new BABYLON.FreeCamera("fixedCamera5", new BABYLON.Vector3(0, 0.5, -5), scene);
    fixedCamera5.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25));
    shakeCamera(fixedCamera5); // Apply camera shake to fixedCamera5


    // Switch between theatrical and fixed cameras periodically
    let useTheatricalCamera = true;
    let switchInterval = (60/(BPM*QuantisationFactor)); // Switch cameras every 10ish seconds

    // Array of fixed cameras
    const fixedCameras = [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5];
    
    // Switch cameras function now selects randomly from all fixed cameras
    function switchCameras() {
        if (useTheatricalCamera) {
            scene.activeCamera = camera;
            transitionToNextCamera(); // Transition to the next theatrical camera position
            setTimeout(switchCameras, switchInterval);
        } else {
            // Randomly choose between all fixed cameras
            const randomIndex = getRandomInt(0, fixedCameras.length);
            scene.activeCamera = fixedCameras[randomIndex];
            setTimeout(switchCameras, switchInterval);
        }
    
        useTheatricalCamera = !useTheatricalCamera;
    }


    // Start switching cameras 
    switchCameras();

    // Animation for lights
    scene.registerBeforeRender(() => {
        const time = performance.now() / 1000;

        // Example of animated light intensity
        pointLight1.intensity = 0.5 + Math.sin(time * 2) * 0.2; // Simulates flickering
        pointLight2.intensity = 0.5 + Math.cos(time * 2) * 0.2;
    });
    
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

    return scene;
}

