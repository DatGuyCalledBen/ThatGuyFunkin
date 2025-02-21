export function createScene(engine, canvas) {
    
    const scene = new BABYLON.Scene(engine);
    let BPM = window.audioBPM
    let initialText
    if (BPM === undefined) {BPM = 120; initialText = 'press CTRL + F5';}
    else {
    initialText = window.audioFileName;
    }
    
    console.warn('BPM is:',BPM)
    const QuantisationFactor = 1/4000
    // Default background color
    //scene.clearColor = new BABYLON.Color3(0.3, 0.2, 0.5); // Slightly purple twilight color
    
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
                const h = (Math.random() * 20);
                const d = (Math.random() * 10) + 5;
                const x = i * spacing;
                const z = j * spacing;
                const position = new BABYLON.Vector3(x, h / 2, z);
                const color = new BABYLON.Color3(Math.random() * 0.5, Math    .random() * 0.5, Math.random() * 0.5);
                const building = createBuilding(scene, `building_${i}_${j}`, w,     h, d, position, color);
                buildings.push(building);
            }
        }
    
        return buildings;
    }
    
    // Create a neighborhood with 20 rows, 20 columns, 20 units of spacing     between buildings, a 5x5 park area, and 5 units of road width
    createNeighborhood(scene, 20, 20, 10, 5, 5);

    // Add simple geometric buildings
    //const building1 = BABYLON.MeshBuilder.CreateBox("building1", { width: 5, height: 10, depth: 5 }, scene);
    //building1.position = new BABYLON.Vector3(5, 5, 6); // Position building
    //const building1Material = new BABYLON.StandardMaterial("building1Material", scene);
    //building1Material.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3); // Dark grey
    //building1.material = building1Material;
    
    //const building2 = BABYLON.MeshBuilder.CreateBox("building2", { width: 8, height: 10, depth: 8 }, scene);
    //building2.position = new BABYLON.Vector3(9, 5, -8); // Position building
    //const building2Material = new BABYLON.StandardMaterial("building2Material", scene);
    //building2Material.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4); // Medium grey
    //building2.material = building2Material;
    //.fogMode = BABYLON.Scene.FOGMODE_EXP;  // Exponential fog for gradual darkening
    //scene.ambientColor = new BABYLON.Color3(0.1, 0.1, 0.1);  // Lower ambient light to increase contrast


    
    // Add lights
    //const hemisphericLight = new BABYLON.HemisphericLight("hemisphericLight", new BABYLON.Vector3(0, 1, 0), scene);
    //hemisphericLight.intensity = 0.7;
    
    // Create the two point lights that will move as one
// Create Point Lights
// Create Directional Lights
const directionalLight1 = new BABYLON.DirectionalLight("directionalLight1", new BABYLON.Vector3(0, -1, 0), scene);
directionalLight1.diffuse = new BABYLON.Color3(1, 0, 0); // Red light
directionalLight1.intensity = 10;

const directionalLight2 = new BABYLON.DirectionalLight("directionalLight2", new BABYLON.Vector3(0, -1, 0), scene);
directionalLight2.diffuse = new BABYLON.Color3(0, 0, 1); // Blue light
directionalLight2.intensity = 10;

// Define constants for the movement and orbital parameters
const lightOrbitRadius = 1000;

// Create a material for the background or sky
const backgroundMaterial = new BABYLON.StandardMaterial("backgroundMaterial", scene);

// Function to update the direction, intensity, and background color
function updateLightsPositionAndIntensity() {
    const now = new Date();  // Get the current time
    const hours = now.getHours();  // Hardcoded hour (e.g., 12 PM)
    const minutes = now.getMinutes();  // Get current minutes (0-59)
    const seconds = now.getSeconds();  // Get current seconds (0-59)
    const month = now.getMonth();  // Get current month (0-11)
    const day = now.getDate();  // Get the current day of the month (1-31)

    // Map time to angle (using hours as the base)
    const timeInHours = hours + minutes / 60 + seconds / 3600;  // Convert to fractional hours
    const angle = timeInHours * (2 * Math.PI / 24);  // Map the time to a 24-hour cycle (360 degrees)

    // Vertical movement based on the sun's angle (sin function for smooth up/down motion)
    const y = 8 * Math.sin(angle);  // Vertical motion simulating sun's rise/fall

    // Make the light direction point towards the origin (0, 0, 0)
    const directionToOrigin = new BABYLON.Vector3(0, 0, 0)
        .subtract(new BABYLON.Vector3(lightOrbitRadius * Math.cos(angle), y, lightOrbitRadius * Math.sin(angle)))
        .normalize();
    directionalLight1.direction = directionToOrigin;
    directionalLight2.direction = directionToOrigin;

    // Adjust the intensity based on the vertical position (day-night cycle)
    const dayIntensity = (y + 8) / 16;  // Normalize the y value to map it to intensity (0 to 1)

    // Seasonal Adjustment (Time of Year)
    const daysInYear = 365;
    const dayOfYear = (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000) % daysInYear;  // Get the day of the year
    const seasonalAngle = Math.sin((dayOfYear / daysInYear) * Math.PI * 2);  // Sinusoidal pattern for seasonal variation

    // Intensity adjustment based on the day of year (simulate summer and winter)
    const seasonalIntensity = 0.5 + 0.5 * seasonalAngle;  // Values between 0 and 1, simulating the sun's strength during seasons

    // Combine day and seasonal intensity
    let finalIntensity = dayIntensity * seasonalIntensity * 1.5; // Increased brightness multiplier
    finalIntensity = Math.max(finalIntensity, 0.2); // Set a minimum brightness threshold

    // Apply the final intensity to both lights
    directionalLight1.intensity = finalIntensity;
    directionalLight2.intensity = finalIntensity;

    // Adjust the background color based on the sun's vertical position (day-night cycle)
    const skyHue = Math.abs(Math.sin(angle));  // Daytime hue: transitioning from blue (day) to darker (night)
    let skyColor = new BABYLON.Color3(skyHue, skyHue, 1 - skyHue);  // Ranges from blue (day) to dark purple (night)

    // Seasonal Adjustment for Background Color
    skyColor = new BABYLON.Color3(
        skyColor.r * (0.7 + 0.3 * seasonalAngle) + 0.1, // Boost brightness
        skyColor.g * (0.7 + 0.3 * seasonalAngle) + 0.1, // Boost brightness
        skyColor.b * (0.7 + 0.3 * seasonalAngle) + 0.1  // Boost brightness
    );

    // Ensure sky color remains bright enough
    skyColor.r = Math.min(skyColor.r, 1);
    skyColor.g = Math.min(skyColor.g, 1);
    skyColor.b = Math.min(skyColor.b, 1);

    // Apply the seasonal color adjustments to the background
    scene.clearColor = skyColor;
}

// Update the light position, intensity, and background color continuously in real time
setInterval(updateLightsPositionAndIntensity, 60/BPM);  // Update every second




// Create shadow generators for point lights
const shadowGenerator1 = new BABYLON.ShadowGenerator(1024, directionalLight1);
shadowGenerator1.usePoissonSampling = true; // Smoother shadows
shadowGenerator1.bias = 0.0001; // Optional: to avoid shadow acne

const shadowGenerator2 = new BABYLON.ShadowGenerator(1024, directionalLight2);
shadowGenerator2.usePoissonSampling = true; // Smoother shadows
shadowGenerator2.bias = 0.0001; // Optional: to avoid shadow acne

directionalLight1.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
directionalLight1.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;

directionalLight2.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
directionalLight2.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;


// Create ground
const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
groundMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // Medium grey for the ground
ground.material = groundMaterial;
ground.receiveShadows = true; // Enable the ground to receive shadows
shadowGenerator1.addShadowCaster(ground); // Add ground to shadow generator 1
shadowGenerator2.addShadowCaster(ground); // Add ground to shadow generator 2

// Assume your cube (box) is already defined:
const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
box.position = new BABYLON.Vector3(-1.25, 1, 1.25);
const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
boxMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
box.material = boxMaterial;
box.receiveShadows = true;

// Define parameters for our cinema lighting:
const distance = 50;        // horizontal distance from cube to each spotlight
const baseY = 0;            // y-position for the spotlights (e.g., on the ground)
const target = box.position; // target the cube's center

// Left Spotlight: placed to the left of the cube
const leftPos = new BABYLON.Vector3(target.x, baseY, target.z - distance);
const leftDir = target.subtract(leftPos).normalize();
var leftSpotlight = new BABYLON.SpotLight("leftSpotlight", leftPos, leftDir, Math.PI / 4, 2, scene);
leftSpotlight.diffuse = new BABYLON.Color3(1, 0.8, 0.6);  // warm tone
leftSpotlight.specular = new BABYLON.Color3(1, 1, 1);

// Right Spotlight: placed to the right of the cube
const rightPos = new BABYLON.Vector3(target.x + distance, baseY, target.z);
const rightDir = target.subtract(rightPos).normalize();
var rightSpotlight = new BABYLON.SpotLight("rightSpotlight", rightPos, rightDir, Math.PI / 4, 2, scene);
rightSpotlight.diffuse = new BABYLON.Color3(0.6, 0.8, 1);  // cooler tone
rightSpotlight.specular = new BABYLON.Color3(1, 1, 1);

// (Optional) Create shadow generators for each spotlight
var shadowGeneratorLeft = new BABYLON.ShadowGenerator(1024, leftSpotlight);
shadowGeneratorLeft.addShadowCaster(box);
var shadowGeneratorRight = new BABYLON.ShadowGenerator(1024, rightSpotlight);
shadowGeneratorRight.addShadowCaster(box);
shadowGenerator1.addShadowCaster(box); // Add box to shadow generator 1
shadowGenerator2.addShadowCaster(box); // Add box to shadow generator 2

// Add pyramid
const pyramid = BABYLON.MeshBuilder.CreateCylinder("pyramid", { diameterTop: 0, diameterBottom: 2, height: 3, tessellation: 4 }, scene);
pyramid.position = new BABYLON.Vector3(3, 1.5, 3); // Elevated position for the pyramid
const pyramidMaterial = new BABYLON.StandardMaterial("pyramidMaterial", scene);
pyramidMaterial.diffuseColor = new BABYLON.Color3(0.25, 0.25, 0.25); // Dark grey
pyramid.material = pyramidMaterial;
pyramid.receiveShadows = true; // Enable pyramid to receive shadows
shadowGenerator1.addShadowCaster(pyramid); // Add pyramid to shadow generator 1
shadowGenerator2.addShadowCaster(pyramid); // Add pyramid to shadow generator 2

// Add cone
const cone = BABYLON.MeshBuilder.CreateCylinder("cone", { diameterTop: 0, diameterBottom: 2, height: 3, tessellation: 16 }, scene);
cone.position = new BABYLON.Vector3(-3, 1.5, -3); // Elevated position for the cone
const coneMaterial = new BABYLON.StandardMaterial("coneMaterial", scene);
coneMaterial.diffuseColor = new BABYLON.Color3(0.75, 0.75, 0.75); // Light grey
cone.material = coneMaterial;
cone.receiveShadows = true; // Enable cone to receive shadows
shadowGenerator1.addShadowCaster(cone); // Add cone to shadow generator 1
shadowGenerator2.addShadowCaster(cone); // Add cone to shadow generator 2

// Add massive cuboid (skyscraper)
const skyscraper = BABYLON.MeshBuilder.CreateBox("skyscraper", { width: 7.5, height: 20, depth: 7.5 }, scene);
skyscraper.position = new BABYLON.Vector3(-5.75, 10, 5.75); // Positioned so that a quarter of it is on the ground
const skyscraperMaterial = new BABYLON.StandardMaterial("skyscraperMaterial", scene);
skyscraperMaterial.diffuseColor = new BABYLON.Color3(0.35, 0.35, 0.35); // Dark grey for the skyscraper
skyscraper.material = skyscraperMaterial;
skyscraper.receiveShadows = true; // Enable skyscraper to receive shadows
shadowGenerator1.addShadowCaster(skyscraper); // Add skyscraper to shadow generator 1
shadowGenerator2.addShadowCaster(skyscraper); // Add skyscraper to shadow generator 2

shadowGeneratorLeft.addShadowCaster(skyscraper);
shadowGeneratorLeft.addShadowCaster(pyramid);
shadowGeneratorLeft.addShadowCaster(cone);
shadowGeneratorLeft.addShadowCaster(ground);
shadowGeneratorRight.addShadowCaster(skyscraper);
shadowGeneratorRight.addShadowCaster(pyramid);
shadowGeneratorRight.addShadowCaster(cone);
shadowGeneratorRight.addShadowCaster(ground);

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

    // Enable step to receive shadows
    step.receiveShadows = true;
    shadowGenerator1.addShadowCaster(step); // Add step to shadow generator 1
    shadowGenerator2.addShadowCaster(step); // Add step to shadow generator 2
}


    // Main camera setup
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 4, Math.PI / 4, 60, new BABYLON.Vector3(-1, 2.5, 1), scene);
    camera.attachControl(canvas, true);
    
    // Define camera positions
    const cameraPositions = [
    // Theatrical angles
    { alpha: -Math.PI / 2, beta: Math.PI / 3, radius: getRandomInt(5, 25) },
    { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: getRandomInt(5, 25) },
    { alpha: -Math.PI / 3, beta: Math.PI / 3, radius: getRandomInt(5, 25) },
    { alpha: -Math.PI / 4, beta: Math.PI / 4, radius: getRandomInt(5, 25) },
    
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
    
    // Dutch angles
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: getRandomInt(5, 25), rotationOffset: Math.PI / 6 },
    { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: getRandomInt(5, 25), rotationOffset: -Math.PI / 6 },
    
    // Overhead Shot
    { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 10 },
    
    // Worm's Eye View
    { alpha: 0, beta: Math.PI / 6, radius: 5 },
    
    // Dynamic Spiral Path
    { 
        alpha: 0, beta: Math.PI / 4, radius: getRandomInt(5, 25),
        panPath: BABYLON.Curve3.CreateCatmullRomSpline([...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 20, 5 + i / 36, Math.sin((i * Math.PI / 180) + 90) * 20)))
    },
    
    // Time-lapse Orbit
    { 
        alpha: 0, beta: Math.PI / 4, radius: getRandomInt(5, 25),
        panPath: BABYLON.Curve3.CreateCatmullRomSpline([...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 60, 5, Math.sin((i * Math.PI / 180) + 90) * 60)))
    },
    
    // Slow Zoom In/Out
    { 
        alpha: 0, beta: Math.PI / 2, radius: 50, 
        zoomPath: {
            frames: [0, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1],
            keys: [
                { frame: 0, value: 50 },
                { frame: 120, value: 1 }
            ],
            easing: new BABYLON.CubicEase()
        }
    },
    
    // Tracking Shot
    { 
        alpha: 0, beta: Math.PI / 4, radius: 10, 
        target: new BABYLON.Vector3(-1.25, 2.5, 1.25),
        animation: new BABYLON.Animation("trackingShotAnimation", "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    },
    
    // Interior View (First-Person Perspective)
    { 
        alpha: 0, beta: Math.PI / 4, radius: 2, 
        position: new BABYLON.Vector3(-3, 2, 3),
        fov: 0.8
    },
    
    // Reflection Shot
    { 
        alpha: Math.PI, beta: Math.PI / 4, radius: 10, 
        position: new BABYLON.Vector3(0, 1, 0),
        mirrorTexture: new BABYLON.MirrorTexture("mirrorTexture", 1024, scene)
    },
    
    // 360-Degree Panoramic View
    { 
        alpha: 0, beta: Math.PI / 2, radius: getRandomInt(5, 25), 
        panPath: BABYLON.Curve3.CreateCatmullRomSpline([...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos((i * Math.PI / 180) + 90) * 50, 10, Math.sin((i * Math.PI / 180) + 90) * 50)))
    },
    
    // VR Free Camera for Full 360 Experience
    { 
        type: "VRDeviceOrientationFreeCamera", 
        position: new BABYLON.Vector3(0, 1.8, 0)
    }
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
            { frame: 128/(BPM*QuantisationFactor), value: camera.alpha - Math.PI/4}
        ]);
    
        camera.animations.push(animation);
        scene.beginAnimation(camera, 0, 128/(BPM*QuantisationFactor), true);
    }
    
    // Function to continuously rotate the camera
    function rotateCamera(camera) {
        const animation = new BABYLON.Animation("cameraRotateAnimation", "beta", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animation.setKeys([
            { frame: 0, value: camera.beta - Math.PI/16 },
            { frame: 128/(BPM*QuantisationFactor), value: camera.beta - Math.PI / 8}
        ]);
    
        camera.animations.push(animation);
        scene.beginAnimation(camera, 0, 128/(BPM*QuantisationFactor), true);
    }
    
    // Function to pan camera along a specific path
    function panCameraAlongPath(camera, path) {
        let pathAnimation = new BABYLON.Animation("cameraPanPathAnimation", "position", getRandomInt(60,180), BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        let keys = [];
        for (let i = 0; i < path.length; i++) {
            keys.push({ frame: i * (128/(BPM*QuantisationFactor) / path.length), value: path[i] });
        }
        pathAnimation.setKeys(keys);
        camera.animations.push(pathAnimation);
        scene.beginAnimation(camera, 0, 128/(BPM*QuantisationFactor), true);
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
            { frame: 128/(BPM*QuantisationFactor), value: camera.radius - 5 }
        ]);
        camera.animations.push(zoomAnimation);
        scene.beginAnimation(camera, 0, 128/(BPM*QuantisationFactor), true);
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
    
    let transitionTime1 = (32 / (BPM * QuantisationFactor)); // Transition time in seconds
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
    scene.imageProcessingConfiguration.contrast = 3;
    scene.imageProcessingConfiguration.exposure = 1.4;
    
    // Depth of Field (DoF)
    const dof = new BABYLON.DepthOfFieldEffect(scene, fixedCamera1, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof2 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera2, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof3 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera3, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof4 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera4, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    const dof5 = new BABYLON.DepthOfFieldEffect(scene, fixedCamera5, { focalLength: 50, fStop: 1.4, focusDistance: 1000, maxBlur: 2 });
    
    // Lighting Effects
    //var spotlight = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
    //spotlight.diffuse = new BABYLON.Color3(1, 0, 0);
    //spotlight.specular = new BABYLON.Color3(1, 1, 1);
    //spotlight.diffuse = new BABYLON.Color3(Math.random(0,1), Math.random(0,1), Math.random(0,1));
    //spotlight.specular = new BABYLON.Color3(1, 1, 1);
    
// Create spotlight for moon
var moonSpotlight = new BABYLON.SpotLight("moonSpotlight", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
moonSpotlight.diffuse = new BABYLON.Color3(0.7, 0.7, 1);  // Pale blue light for the moon
moonSpotlight.specular = new BABYLON.Color3(1, 1, 1);  // Bright specular highlight

// Define constants for the moon's orbital dynamics
const moonOrbitRadius = 100;
const moonOrbitSpeed = 0.1; // Speed of the moon's movement around the scene
const maxMoonIntensity = 0.7; // Maximum moon intensity

// Function to update the moon's position and intensity
function updateMoonPositionAndIntensity() {
    const now = new Date();  // Get the current time
    const hours = now.getHours();  // Get current hour (0-23)
    const minutes = now.getMinutes();  // Get current minutes (0-59)
    const seconds = now.getSeconds();  // Get current seconds (0-59)
    
    // Map time to angle (using hours as the base)
    const timeInHours = hours + minutes / 60 + seconds / 3600;  // Convert to fractional hours
    const angle = timeInHours * (2 * Math.PI / 24);  // Map the time to a 24-hour cycle (360 degrees)

    // Calculate the new position for the moon (circular motion)
    const x = moonOrbitRadius * Math.cos(angle);  // Horizontal movement (circular orbit)
    const z = moonOrbitRadius * Math.sin(angle);  // Horizontal movement (circular orbit)

    // Update the moon's position
    moonSpotlight.position.x = x;
    moonSpotlight.position.z = z;

    // Vertical movement based on the moon's angle (sin function for smooth up/down motion)
    const y = 10 * Math.sin(angle);  // Vertical motion simulating moon's rise/fall
    moonSpotlight.position.y = y;

    // Adjust moon intensity based on the vertical position (moonlight intensity will be weaker when the moon is near the horizon)
    const moonIntensity = (y + 10) / 20;  // Normalize the y value to map it to intensity (0 to 1)
    moonSpotlight.intensity = moonIntensity * maxMoonIntensity;

    // Seasonal Adjustment (Time of Year - Phases of the Moon)
    const daysInYear = 365;
    const dayOfYear = (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000) % daysInYear;  // Get the day of the year
    const moonPhaseAngle = Math.sin((dayOfYear / daysInYear) * Math.PI * 2);  // Sinusoidal pattern for waxing/waning moon phases

    // Simulate the waxing and waning of the moon
    const moonPhaseIntensity = (moonPhaseAngle + 1) / 2;  // Phase intensity between 0 (new moon) and 1 (full moon)

    // Combine moon intensity with moon phase intensity
    const finalMoonIntensity = moonSpotlight.intensity * moonPhaseIntensity;

    // Apply the final moon intensity
    moonSpotlight.intensity = finalMoonIntensity;

    // Optional: Adjust moon color dynamically based on intensity or phases (colder during the new moon, bluer during the full moon)
    const moonColor = new BABYLON.Color3(0.7, 0.7, 1).scale(moonPhaseIntensity);
    moonSpotlight.diffuse = moonColor;
}

// Update the moon's position and intensity continuously in real time
setInterval(updateMoonPositionAndIntensity, 1000);  // Update every second

const shadowGenerator3 = new BABYLON.ShadowGenerator(1024, moonSpotlight);
shadowGenerator3.usePoissonSampling = true; // Smoother shadows
shadowGenerator3.bias = 0.0001; // Optional: to avoid shadow acne

shadowGenerator3.addShadowCaster(skyscraper);
shadowGenerator3.addShadowCaster(pyramid);
shadowGenerator3.addShadowCaster(cone);
shadowGenerator3.addShadowCaster(box);
shadowGenerator3.addShadowCaster(ground);

directionalLight1.shadowMinZ = 0.1;  // Adjust to control the softness/sharpness of shadows
directionalLight1.shadowMaxZ = 100;  // Adjust distance for the shadow range
scene.shadowsEnabled = true;
    
    // Slow Motion and Time Effects
    scene.animationGroups.forEach(group => {
        group.speedRatio = 1; // Slow motion
    });
    
    // Post-processing Effects
    var pipeline = new BABYLON.DefaultRenderingPipeline("defaultPipeline", true, scene, [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5]);
    //pipeline.bloomEnabled = true;
    //pipeline.bloomThreshold = 0.2;
    //pipeline.bloomWeight = 0.8;
    //pipeline.bloomKernel = 128;
    //pipeline.bloomScale = 1;
    
    // Switch between theatrical and fixed cameras periodically
    let useTheatricalCamera = true;
    let switchInterval = 128/(BPM*QuantisationFactor); // Switch cameras every 10ish seconds

    // Array of fixed cameras
    const fixedCameras = [fixedCamera1, fixedCamera2, fixedCamera3, fixedCamera4, fixedCamera5];
    
    // Switch cameras function now selects randomly from all fixed cameras
    var D1 = new BABYLON.Vector3(-1, 2.5, 1)
    var D2 = new BABYLON.Vector3(2, 0.5, 0)
    
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
        const targetIndex = getRandomInt(0, 10);
        let D;
        if (targetIndex == 0) {
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
    directionalLight1.intensity = 0.5 + Math.sin(time / 16) * 0.2; // Simulates flickering
    directionalLight2.intensity = 0.5 + Math.cos(time / 16) * 0.2;
    });
    
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
// Create a particle system
const particleSystem = new BABYLON.ParticleSystem("fogParticles", 5000, scene);

// Set the particle texture (use a soft round texture for fog)
particleSystem.particleTexture = new BABYLON.Texture("https://playground.babylonjs.com/textures/particle.png", scene);

// Create an emitter (position where the fog originates)
const emitter = new BABYLON.Vector3(-1, 0, 0); // Center of the scene
particleSystem.emitter = emitter;

// Adjust particle size and lifetime
particleSystem.minSize = 1.0;
particleSystem.maxSize = 3.0;
particleSystem.minLifeTime = 2.0;
particleSystem.maxLifeTime = 4.0;

// Adjust emission rate for a thick fog effect
let beatDuration = 60/BPM
let particlesPerBeat = 64
particleSystem.emitRate = particlesPerBeat / beatDuration;

// Set particle speed for a slow-moving fog
particleSystem.minEmitPower = 2.5*(Math.E**((135/BPM)**4));
particleSystem.maxEmitPower = 4*(Math.E**((135/BPM)**4));

// Set the direction of the particles (randomized for fog)
particleSystem.direction1 = new BABYLON.Vector3(-1, 1, 1);
particleSystem.direction2 = new BABYLON.Vector3(1, 1, -1);

// Set particle color to a moody tone
particleSystem.color1 = new BABYLON.Color4(Math.random(0,1), Math.random(0,1), Math.random(0,1)); // Light gray, semi-transparent
particleSystem.color2 = new BABYLON.Color4(Math.random(0,1), Math.random(0,1), Math.random(0,1)); // Darker gray

// Adjust gravity for a floating effect
particleSystem.gravity = new BABYLON.Vector3(0, -0.2*(Math.E**((135/BPM)**4)), 0);

// Start the particle system
// particleSystem.start();
//const ssao = new BABYLON.SSAO2RenderingPipeline("ssao", scene, 1);
//ssao.radius = 0.5; // Shadow spread (higher = softer, lower = tighter)
//ssao.totalStrength = 4; // Increase for deeper occlusion
//ssao.base = 1; // Adjusts overall brightness

//scene.postProcessRenderPipelineManager.addPipeline(ssao);
//scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao", camera);



    return scene;
}

