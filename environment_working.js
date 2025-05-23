export function createScene(engine, canvas) {
    
    const scene = new BABYLON.Scene(engine);
    let BPM = window.audioBPM
    const QuantisationFactor = 1/1000
    let initialText
    if (BPM === undefined) {BPM = 120; initialText = 'press CTRL + F5';}
    else {
    initialText = window.audioFileName;
    }
    // Default background color
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    
    // Create the plane
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", { size: 4 }, scene);
    
    // Create the dynamic texture
    var dynamicTexture = new BABYLON.DynamicTexture("dynamicTexture", { width: 512, height: 128 }, scene);
    
    // Get the texture context
    var textureContext = dynamicTexture.getContext();
    
    // Set the initial text
    textureContext.fillStyle = "white";
    textureContext.font = "36px Arial";
    textureContext.fillText(initialText, 40, 40);
    
    // Update the dynamic texture to reflect changes
    dynamicTexture.update();
    
    // Apply the dynamic texture to the plane
    var planeMaterial = new BABYLON.StandardMaterial("planeMaterial", scene);
    planeMaterial.diffuseTexture = dynamicTexture;
    plane.material = planeMaterial;
    
    // Position and orient the plane
    plane.position = new BABYLON.Vector3(-4.5, 5, 1.9);
    plane.rotation = new BABYLON.Vector3(0, 0, 0);
    
    function createBuilding(scene, name, width, height, depth, position, color)     {
        const building = BABYLON.MeshBuilder.CreateBox(name, { width: width,     height: height, depth: depth }, scene);
        building.position = position;
        const buildingMaterial = new BABYLON.StandardMaterial(name + "Material",     scene);
        buildingMaterial.diffuseColor = color;
        building.material = buildingMaterial;
        return building;
    }
    
     function createNeighborhood(scene, rows, cols, spacing, parkSize, roadWidth)     {
        const buildings = [];
        const halfRows = Math.floor(rows / 2);
        const halfCols = Math.floor(cols / 2);
        const halfParkSize = Math.floor(parkSize / 2);
    
        for (let i = -halfRows; i <= halfRows; i++) {
            for (let j = -halfCols; j <= halfCols; j++) {
                // Skip buildings in the park area
                if (Math.abs(i) <= halfParkSize && Math.abs(j) <= halfParkSize)     {
                    continue;
                }
    
                // Skip buildings in the adjacent road area
                if ((Math.abs(i) <= halfParkSize + roadWidth && Math.abs(j) >     halfParkSize && Math.abs(j) <= halfParkSize + roadWidth)     ||
                    (Math.abs(j) <= halfParkSize + roadWidth && Math.abs(i) >     halfParkSize && Math.abs(i) <= halfParkSize +     roadWidth)) {
                    continue;
                }
    
                const w = (Math.random() * 10) + 5;
                const h = (Math.random() * 50);
                const d = (Math.random() * 10) + 5;
                const x = i * spacing;
                const z = j * spacing;
                const position = new BABYLON.Vector3(x, h / 2, z);
                const color = new BABYLON.Color3(Math.random() * 0.5, Math    .random() * 0.5, Math.random() * 0.5);
                const building = createBuilding(scene, `building_${i}_${j}`, w, h, d, position, color);
                buildings.push(building);
            }
        }
    
        return buildings;
    }
    
    // Create a neighborhood with 20 rows, 20 columns, 20 units of spacing     between buildings, a 5x5 park area, and 5 units of road width
    createNeighborhood(scene, 20, 20, 10, 5, 5);

    // Add simple geometric buildings
    const building1 = BABYLON.MeshBuilder.CreateBox("building1", { width: 5, height: 10, depth: 5 }, scene);
    building1.position = new BABYLON.Vector3(5, 5, 6); // Position building
    const building1Material = new BABYLON.StandardMaterial("building1Material", scene);
    building1Material.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3); // Dark grey
    building1.material = building1Material;
    
    const building2 = BABYLON.MeshBuilder.CreateBox("building2", { width: 8, height: 10, depth: 8 }, scene);
    building2.position = new BABYLON.Vector3(9, 5, -8); // Position building
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
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 9, height: 9 }, scene);
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
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 4, Math.PI / 4, 60, new BABYLON.Vector3(-1, 2.5, 1), scene);
    camera.attachControl(canvas, true);
    
    // Define camera positions
    const cameraPositions = [
    // Theatrical angles
    { alpha: -Math.PI / 2, beta: Math.PI / 3, radius: getRandomInt(5,25) },
    { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: getRandomInt(5,25) },
    { alpha: -Math.PI / 3, beta: Math.PI / 3, radius: getRandomInt(5,25) },
    { alpha: -Math.PI / 4, beta: Math.PI / 4, radius: getRandomInt(5,25) },
    // Close-ups on the cube
    { alpha: 0, beta: Math.PI / 2, radius: 3 },
    { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 3 },
    { alpha: Math.PI, beta: Math.PI / 2, radius: 3 },
    { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: 3 },
    // Mid-range circling around the cube
    { alpha: 0, beta: Math.PI / 4, radius: 10 },
    { alpha: Math.PI / 2, beta: Math.PI / 4, radius: 10 },
    { alpha: Math.PI, beta: Math.PI / 4, radius: 10 },
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10 },
    // Perched on the cone
    { alpha: Math.PI / 4, beta: Math.PI / 4, radius: 7, position: new BABYLON.Vector3(-3, 3, -3) },
    // Dutch angle
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: getRandomInt(5,25), rotationOffset: Math.PI / 6 },
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: getRandomInt(5,25), rotationOffset: -Math.PI / 6 },
    // Tracking shot
    { alpha: 0, beta: Math.PI / 4, radius: getRandomInt(5,25), panPath: [new BABYLON.Vector3(0, 6, -12.5), new BABYLON.Vector3(0, 6, 2.5)] },
    // Over-the-shoulder
    { alpha: -Math.PI / 3, beta: Math.PI / 4, radius: 10, target: new BABYLON.Vector3(-1.25, 2.5, 1.25) },
    // Low angle looking up at the box
    { alpha: Math.PI / 6, beta: 3 * Math.PI / 4, radius: 5, target: new BABYLON.Vector3(-1.25, 2.5, 1.25) },
    // High angle looking down at the box
    { alpha: Math.PI / 3, beta: Math.PI / 6, radius: 8, target: new BABYLON.Vector3(-1.25, 2.5, 1.25) },
    // Zoom shots
    { alpha: 0, beta: Math.PI / 2, radius: 1.5 },
    { alpha: Math.PI, beta: Math.PI / 2, radius: 1.5 },
    // Dolly shot
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, dollyPath: [new BABYLON.Vector3(-10, 2.5, -2), new BABYLON.Vector3(-1.25, 2.5, 1.25), new BABYLON.Vector3(10, 2.5, -2)] },
    // Truck shot
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, truckPath: [new BABYLON.Vector3(-2, 2.5, -10), new BABYLON.Vector3(-2, 2.5, 10)] },
    // New camera positions
    { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 10 }, // Overhead Shot
    { alpha: 0, beta: Math.PI / 6, radius: 5 }, // Worm's Eye View
    { alpha: 0, beta: Math.PI / 4, radius: getRandomInt(5,25), panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 20, 5 + i / 36, Math.sin((i * Math.PI / 180) + 90) * 20)) }, // Dynamic Spiral
    { alpha: 0, beta: Math.PI / 4, radius: getRandomInt(5,25), panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 60, 5, Math.sin((i * Math.PI / 180) + 90) * 60)) }, // Time-lapse Orbit
    { alpha: 0, beta: Math.PI / 2, radius: 50, zoomPath: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1] }, // Slow Zoom In/Out
    { alpha: 0, beta: Math.PI / 4, radius: 10, target: new BABYLON.Vector3(-1.25, 2.5, 1.25) }, // Tracking Shot Following an Object
    { alpha: 0, beta: Math.PI / 4, radius: 2, position: new BABYLON.Vector3(-3, 2, 3) }, // Interior View (First-Person Perspective)
    { alpha: Math.PI, beta: Math.PI / 4, radius: 10, position: new BABYLON.Vector3(0, 1, 0) }, // Reflection Shot
    { alpha: 0, beta: Math.PI / 2, radius: getRandomInt(5,25), panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 50, 10, Math.sin((i * Math.PI / 180) + 90) * 50)) }, // 360-Degree Panoramic View
    ];

    let currentCameraIndex = 0;
    let transitionTime = (60*3 / (BPM * QuantisationFactor)); // Transition time in milliseconds
    
    // Function to smoothly transition between camera positions
    function transitionToNextCamera() {
        let nextPosition;
        let nextCameraIndex;
        
        // Determine next camera position based on whether theatrical or fixed camera is used
        if (useTheatricalCamera) {
            // Select a random position from theatrical camera positions
            const nextCameraIndex = getRandomInt(0, cameraPositions.length);
            nextPosition = cameraPositions[nextCameraIndex];
        } else {
            // Select the next fixed camera in sequence
            currentCameraIndex = (currentCameraIndex + 1) % fixedCameras.length;
            nextPosition = {
                alpha: fixedCameras[currentCameraIndex].alpha,
                beta: fixedCameras[currentCameraIndex].beta,
                radius: fixedCameras[currentCameraIndex].radius,
                position: fixedCameras[currentCameraIndex].position,
                rotationOffset: fixedCameras[currentCameraIndex].rotationOffset,
                panPath: fixedCameras[currentCameraIndex].panPath,
                dollyPath: fixedCameras[currentCameraIndex].dollyPath,
                truckPath: fixedCameras[currentCameraIndex].truckPath
            };
        }

        if (!nextPosition) {
            console.error('Next camera position is undefined or null.');
            return; // Exit function early if nextPosition is invalid
        }
    
        // Ensure nextPosition has necessary properties before accessing them
        if (nextPosition.alpha !== undefined && nextPosition.beta !== undefined && nextPosition.radius !== undefined) {
        // Store nextCameraIndex for later use
            const animationCallback = () => {
            currentCameraIndex = useTheatricalCamera ? nextCameraIndex : currentCameraIndex;
            };

            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera, 'alpha', getRandomInt(30,90), 1200, camera.alpha, nextPosition.alpha, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera, 'beta', getRandomInt(150,450), 1200, camera.beta, nextPosition.beta, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            BABYLON.Animation.CreateAndStartAnimation('cameraTransition', camera, 'radius', getRandomInt(45,135), 1200, camera.radius, nextPosition.radius, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT, null, animationCallback);

        // Handle specific target for looking up angles or other customized targets
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
            // panCameraAlongPath(nextPosition.panPath);
        }

        // Handle dollyPath for dolly shots
        if (nextPosition.dollyPath) {
            // panCameraAlongPath(nextPosition.dollyPath);
        }

        // Handle truckPath for truck shots
        if (nextPosition.truckPath) {
            // panCameraAlongPath(nextPosition.truckPath);
        }
    } else {
        console.error('Next camera position is missing required properties (alpha, beta, radius).');
    }
}


    // Function to continuously pan the camera
    function panCamera(camera) {
        const animation = new BABYLON.Animation("cameraPanAnimation", "alpha", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animation.setKeys([
            { frame: 0, value: camera.alpha - Math.PI/2 },
            { frame: 24*60/(3*BPM*QuantisationFactor), value: camera.alpha - Math.PI/4}
        ]);
    
        camera.animations.push(animation);
        scene.beginAnimation(camera, 0, 24*60/(3*BPM*QuantisationFactor), true);
    }
    
    // Function to continuously rotate the camera
    function rotateCamera(camera) {
        const animation = new BABYLON.Animation("cameraRotateAnimation", "beta", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animation.setKeys([
            { frame: 0, value: camera.beta - Math.PI/16 },
            { frame: 24*60/(3*BPM*QuantisationFactor), value: camera.beta - Math.PI / 8}
        ]);
    
        camera.animations.push(animation);
        scene.beginAnimation(camera, 0, 24*60/(3*BPM*QuantisationFactor), true);
    }
    
    // Function to pan camera along a specific path
    function panCameraAlongPath(camera, path) {
        let pathAnimation = new BABYLON.Animation("cameraPanPathAnimation", "position", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        let keys = [];
        for (let i = 0; i < path.length; i++) {
            keys.push({ frame: i * (24*60/(3*BPM*QuantisationFactor) / path.length), value: path[i] });
        }
        pathAnimation.setKeys(keys);
        camera.animations.push(pathAnimation);
        scene.beginAnimation(camera, 0, 24*60/(3*BPM*QuantisationFactor), true);
    }
    
    // Helper function to get a random integer between min (inclusive) and max (exclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // Start initial camera movement
    panCamera(camera);
    rotateCamera(camera);
    
    // Function to apply zoom to fixed cameras
    function applyZoomToFixedCamera(camera) {
        const zoomAnimation = new BABYLON.Animation("fixedCameraZoomAnimation",     "radius", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        zoomAnimation.setKeys([
            { frame: 0, value: camera.radius },
            { frame: 24*60/(3*BPM*QuantisationFactor), value: camera.radius - 5 }
        ]);
        camera.animations.push(zoomAnimation);
        scene.beginAnimation(camera, 0, 24*60/(3*BPM*QuantisationFactor), true);
    }
    
    // Function to apply camera shake
    function applyCameraShake(camera, intensity = 0.01, frequency = 60) {
        const shakeAnimation = new BABYLON.Animation("cameraShakeAnimation", "position", frequency, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        const keys = [];
        for (let i = 0; i <= 12000; i += frequency) {
            keys.push({
                frame: i,
                value: new BABYLON.Vector3(
                    camera.position.x + (Math.random() - 0.5) * intensity,
                    camera.position.y + (Math.random() - 0.5) * intensity,
                    camera.position.z + (Math.random() - 0.5) * intensity
                )
            });
        }
        shakeAnimation.setKeys(keys);
        camera.animations.push(shakeAnimation);
        scene.beginAnimation(camera, 0, 6000, true);
    }
    
    // Function to transition between cameras
    function transitionToCamera(camera) {
        scene.activeCamera = camera;
        scene.activeCamera.attachControl(canvas, true);
    }
    
    let transitionTime1 = (60 / (BPM * QuantisationFactor)); // Transition time in seconds
    setInterval(() => {
        const cameras = [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5];
        const randomCamera = cameras[getRandomInt(0, cameras.length-1)];
        transitionToCamera(randomCamera);
    }, transitionTime1 * 1000);
    
    // Fixed Position Cameras
    const fixedCamera1 = new BABYLON.FreeCamera("fixedCamera1", new BABYLON.Vector3(-4, 3.5, -4), scene);
    fixedCamera1.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25)); // Apply camera shake to fixedCamera1
    applyCameraShake(fixedCamera1);
    
    const fixedCamera2 = new BABYLON.FreeCamera("fixedCamera2", new BABYLON.Vector3(4, 0.5, -4), scene);
    fixedCamera2.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25)); // Apply camera shake to fixedCamera2
    applyCameraShake(fixedCamera2);
    
    // Additional fixed position cameras
    const fixedCamera3 = new BABYLON.FreeCamera("fixedCamera3", new BABYLON.Vector3(2.5, 3.5, 2.5), scene);
    fixedCamera3.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25)); // Apply camera shake to fixedCamera3
    applyCameraShake(fixedCamera3);
    
    const fixedCamera4 = new BABYLON.FreeCamera("fixedCamera4", new BABYLON.Vector3(2, 5, -5), scene);
    fixedCamera4.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25)); // Apply camera shake to fixedCamera4
    applyCameraShake(fixedCamera4);
    
    const fixedCamera5 = new BABYLON.FreeCamera("fixedCamera5", new BABYLON.Vector3(-2.5, 0.5, -2.5), scene);
    fixedCamera5.setTarget(new BABYLON.Vector3(-1.25, 2.5, 1.25)); // Apply camera shake to fixedCamera5
    applyCameraShake(fixedCamera5);
    
    // Color Grading and Effects
    scene.imageProcessingConfiguration.contrast = 1.6;
    scene.imageProcessingConfiguration.exposure = 1.1;
    
    // Depth of Field (DoF)
    const dof = new BABYLON.DepthOfFieldEffect(scene, fixedCamera1, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof2 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera2, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof3 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera3, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof4 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera4, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof5 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera5, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    
    // Lighting Effects
    var spotlight = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
    //spotlight.diffuse = new BABYLON.Color3(1, 0, 0);
    //spotlight.specular = new BABYLON.Color3(1, 1, 1);
    spotlight.diffuse = new BABYLON.Color3(Math.random(0,1), Math.random(0,1), Math.random(0,1));
    spotlight.specular = new BABYLON.Color3(1, 1, 1);
    
    // Slow Motion and Time Effects
    scene.animationGroups.forEach(group => {
        group.speedRatio = 1; // Slow motion
    });
    
    // Post-processing Effects
    var pipeline = new BABYLON.DefaultRenderingPipeline("defaultPipeline", true, scene, [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5]);
    pipeline.bloomEnabled = true;
    pipeline.bloomThreshold = 0.1;
    pipeline.bloomWeight = 0.8;
    pipeline.bloomKernel = 128;
    pipeline.bloomScale = 1;
    
    // Switch between theatrical and fixed cameras periodically
    let useTheatricalCamera = true;
    let switchInterval = (3*60/(BPM*QuantisationFactor))/1; // Switch cameras every 10ish seconds

    // Array of fixed cameras
    const fixedCameras = [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5];
    
    // Switch cameras function now selects randomly from all fixed cameras
    //var D1 = new BABYLON.Vector3(-1, 2.5, 1)
    //var D2 = new BABYLON.Vector3(2, 0.5, 0)
    var D1 = new BABYLON.Vector3(-0.99, 2.51, 0.99)
    var D2 = new BABYLON.Vector3(2.01, 0.51, -0.01)
    
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
    
        // Randomly choose a new target value for D
        const targetIndex = getRandomInt(0, 5);
        let D;
        if (targetIndex === 0) {
            D = D2;
        } else {
            D = D1;
        }
    
        // Apply the new target value D to the camera
        if (scene.activeCamera) {
            scene.activeCamera.setTarget(D);
        }
    
        useTheatricalCamera = !useTheatricalCamera;
    }
    
    // Start switching cameras
    switchCameras();

    // Animation for lights
    scene.registerBeforeRender(() => {
    const time = performance.now() / 1000;
    pointLight1.intensity = 0.5 + Math.sin(time / 16) * 0.2; // Simulates flickering
    pointLight2.intensity = 0.5 + Math.cos(time / 16) * 0.2;
    });
    
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

    // Create shadow generators for point lights
const shadowGenerator1 = new BABYLON.ShadowGenerator(1024, pointLight1);
shadowGenerator1.usePoissonSampling = true; // Smoother shadows
shadowGenerator1.bias = 0.0001; // Optional: to avoid shadow acne

const shadowGenerator2 = new BABYLON.ShadowGenerator(1024, pointLight2);
shadowGenerator2.usePoissonSampling = true; // Smoother shadows
shadowGenerator2.bias = 0.0001; // Optional: to avoid shadow acne

const shadowGenerator4 = new BABYLON.ShadowGenerator(1024, spotlight);
shadowGenerator4.usePoissonSampling = true; // Smoother shadows
shadowGenerator4.bias = 0.0001; // Optional: to avoid shadow acne

pointLight1.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
pointLight1.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;

pointLight2.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
pointLight2.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;

spotlight.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
spotlight.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;

box.receiveShadows = true;
pyramid.receiveShadows = true;
cone.receiveShadows = true;
building1.receiveShadows = true;
building2.receiveShadows = true;
skyscraper.receiveShadows = true;
ground.receiveShadows = true;

shadowGenerator1.addShadowCaster(box);
shadowGenerator1.addShadowCaster(pyramid);
shadowGenerator1.addShadowCaster(cone);
shadowGenerator1.addShadowCaster(ground);
shadowGenerator2.addShadowCaster(box);
shadowGenerator2.addShadowCaster(pyramid);
shadowGenerator2.addShadowCaster(cone);
shadowGenerator2.addShadowCaster(ground);
shadowGenerator4.addShadowCaster(box);
shadowGenerator4.addShadowCaster(pyramid);
shadowGenerator4.addShadowCaster(cone);
shadowGenerator4.addShadowCaster(ground);

shadowGenerator1.addShadowCaster(building1);
shadowGenerator1.addShadowCaster(building2);
shadowGenerator1.addShadowCaster(skyscraper);
shadowGenerator2.addShadowCaster(building1);
shadowGenerator2.addShadowCaster(building2);
shadowGenerator2.addShadowCaster(skyscraper);
shadowGenerator4.addShadowCaster(building1);
shadowGenerator4.addShadowCaster(building2);
shadowGenerator4.addShadowCaster(skyscraper);


const ssaoRender = new BABYLON.SSAORenderingPipeline("ssao", scene, 1);
scene.postProcessRenderPipelineManager.addPipeline(ssaoRender);
scene.postProcessRenderPipelineManager.enableEffectInPipeline("ssao", ssaoRender.SSAOCombineRenderEffect);

// attach to your spotlight (or sun-directional light)
const godrays = new BABYLON.VolumetricLightScatteringPostProcess(
  "godrays",    // name
  1.0,          // ratio (full res)
  camera,       // scene camera
  pointLight1,    // the light source
  100,          // sampling quality (more = smoother)
  BABYLON.Texture.BILINEAR_SAMPLINGMODE,
  engine,
  false         // autoClearLens (if true, draws only on light-visible pixels)
);
godrays.exposure = 0.3;     // control brightness
godrays.decay = 0.95;       // how fast rays fade
godrays.weight = 0.9;       // intensity per sample
godrays.density = 0.96;     // tightness of shafts

    return scene;
}

