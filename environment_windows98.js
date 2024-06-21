export function createScene(engine, canvas) {
    const scene = new BABYLON.Scene(engine);
    const BPM = 70;
    const QuantisationFactor = 1 / 16000;
    const ANIMATION_FRAME_RATE = 60;
    const ANIMATION_DURATION = 6000;
    const TRANSITION_DURATION = 60 / (4*BPM * QuantisationFactor);

    // Default background color (darker for cyberpunk feel)
    scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1); // Dark grey background

    // Material for a cyberpunk look
    const createCyberpunkMaterial = (color, emissiveColor) => {
        let material = new BABYLON.StandardMaterial("material", scene);
        material.diffuseColor = new BABYLON.Color3(...color);
        material.specularColor = new BABYLON.Color3(0, 0, 0); // No specular highlights
        material.emissiveColor = new BABYLON.Color3(...emissiveColor); // Neon glow effect
        material.backFaceCulling = false; // Ensure it looks good from all angles
        return material;
    };

    // Add simple geometric buildings with cyberpunk colors
    const addBuilding = (name, dimensions, position, color, emissiveColor) => {
        const building = BABYLON.MeshBuilder.CreateBox(name, dimensions, scene);
        building.position = position;
        building.material = createCyberpunkMaterial(color, emissiveColor);
    };

    addBuilding("building1", { width: 4, height: 8, depth: 4 }, new BABYLON.Vector3(5, 4, 6), [0.2, 0.2, 0.2], [0, 0, 1]);
    addBuilding("building2", { width: 6, height: 12, depth: 6 }, new BABYLON.Vector3(9, 6, -8), [0.3, 0.3, 0.3], [1, 0, 0]);

    // Add box (stage cube)
    const addBox = (name, size, position, color, emissiveColor) => {
        const box = BABYLON.MeshBuilder.CreateBox(name, { size }, scene);
        box.position = position;
        box.material = createCyberpunkMaterial(color, emissiveColor);
    };

    addBox("box", 1.5, new BABYLON.Vector3(-1.25, 1.25, 1.25), [0.4, 0.4, 0.4], [0, 1, 0]);

    // Add pyramid
    const addPyramid = (name, dimensions, position, color, emissiveColor) => {
        const pyramid = BABYLON.MeshBuilder.CreateCylinder(name, dimensions, scene);
        pyramid.position = position;
        pyramid.material = createCyberpunkMaterial(color, emissiveColor);
    };

    addPyramid("pyramid", { diameterTop: 0, diameterBottom: 1.5, height: 2.5, tessellation: 4 }, new BABYLON.Vector3(3, 1.25, 3), [0.2, 0.2, 0.2], [0, 1, 1]);

    // Add cone
    addPyramid("cone", { diameterTop: 0, diameterBottom: 1.5, height: 2.5, tessellation: 8 }, new BABYLON.Vector3(-3, 1.25, -3), [0.6, 0.6, 0.6], [1, 0, 1]);

    // Add massive cuboid (skyscraper)
    addBuilding("skyscraper", { width: 5, height: 16, depth: 5 }, new BABYLON.Vector3(-5.75, 8, 5.75), [0.25, 0.25, 0.25], [1, 1, 0]);

    // Add tiny stairs
    const stepHeight = 0.04;
    const stepDepth = 0.08;
    const stepWidth = 2;
    const numberOfSteps = Math.ceil(1.5 / stepHeight);

    for (let i = 0; i < numberOfSteps; i++) {
        addBuilding(`step${i}`, { width: stepWidth, height: stepHeight, depth: stepDepth }, new BABYLON.Vector3(-3.5 + (stepWidth - 1.5) / 2, 1 - (i * stepHeight), 1.75 - (i * stepDepth)), [0.4, 0.4, 0.4], [0, 1, 1]);
    }

    // Main camera setup
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 50, new BABYLON.Vector3(-1.25, 1.5, 1.25), scene);
    camera.attachControl(canvas, true);

    // Define camera positions
    const cameraPositions = [
        // Theatrical angles
        { alpha: -Math.PI / 2, beta: Math.PI / 3, radius: 60 },
        { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: 80 },
        { alpha: -Math.PI / 3, beta: Math.PI / 3, radius: 50 },
        { alpha: -Math.PI / 4, beta: Math.PI / 4, radius: 70 },
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
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 50, rotationOffset: Math.PI / 6 },
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 50, rotationOffset: -Math.PI / 6 },
        // Tracking shot
        { alpha: 0, beta: Math.PI / 4, radius: 50, panPath: [new BABYLON.Vector3(0, 6, -12.5), new BABYLON.Vector3(0, 6, 2.5)] },
        // Over-the-shoulder
        { alpha: -Math.PI / 3, beta: Math.PI / 4, radius: 10, target: new BABYLON.Vector3(-1.25, 1, 1.25) },
        // Low angle looking up at the box
        { alpha: Math.PI / 6, beta: 3 * Math.PI / 4, radius: 5, target: new BABYLON.Vector3(-1.25, 1, 1.25) },
        // High angle looking down at the box
        { alpha: Math.PI / 3, beta: Math.PI / 6, radius: 8, target: new BABYLON.Vector3(-1.25, 1, 1.25) },
        // Zoom shots
        { alpha: 0, beta: Math.PI / 2, radius: 1.5 },
        { alpha: Math.PI, beta: Math.PI / 2, radius: 1.5 },
        // Dolly shot
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, dollyPath: [new BABYLON.Vector3(-10, 2.5, -2), new BABYLON.Vector3(-1.25, 2.5, 1.25), new BABYLON.Vector3(10, 2.5, -2)] },
        // Truck shot
        { alpha: -Math.PI / 2, beta: Math.PI / 4, radius: 10, truckPath: [new BABYLON.Vector3(-2, 2.5, -10), new BABYLON.Vector3(-2, 2.5, 10)] },
        // New camera positions
        { alpha: Math.PI / 2, beta: Math.PI / 2, radius: 100 }, // Overhead Shot
        { alpha: 0, beta: Math.PI / 6, radius: 5 }, // Worm's Eye View
        { alpha: 0, beta: Math.PI / 4, radius: 20, panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos(i * Math.PI / 180) * 20, 5 + i / 180, Math.sin(i * Math.PI / 180) * 20)) } // Panoramic Shot
    ];

    let currentCameraIndex = 0;

    const animateCamera = () => {
        if (currentCameraIndex >= cameraPositions.length) {
            currentCameraIndex = 0;
        }

        const position = cameraPositions[currentCameraIndex];
        const target = position.target || new BABYLON.Vector3(-1.25, 5, 1.25);
        const rotationOffset = position.rotationOffset || 0;
        const panPath = position.panPath || null;
        const dollyPath = position.dollyPath || null;
        const truckPath = position.truckPath || null;

        const animationPosition = new BABYLON.Animation("cameraPositionAnimation", "position", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        const animationAlpha = new BABYLON.Animation("cameraAlphaAnimation", "alpha", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        const animationBeta = new BABYLON.Animation("cameraBetaAnimation", "beta", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        const animationRadius = new BABYLON.Animation("cameraRadiusAnimation", "radius", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        const animationRotationZ = new BABYLON.Animation("cameraRotationZAnimation", "rotation.z", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

        const keysPosition = [];
        const keysAlpha = [];
        const keysBeta = [];
        const keysRadius = [];
        const keysRotationZ = [];

        if (panPath) {
            for (let i = 0; i < panPath.length; i++) {
                keysPosition.push({ frame: i * (ANIMATION_FRAME_RATE / panPath.length), value: panPath[i] });
            }
        } else if (dollyPath) {
            for (let i = 0; i < dollyPath.length; i++) {
                keysPosition.push({ frame: i * (ANIMATION_FRAME_RATE / dollyPath.length), value: dollyPath[i] });
            }
        } else if (truckPath) {
            for (let i = 0; i < truckPath.length; i++) {
                keysPosition.push({ frame: i * (ANIMATION_FRAME_RATE / truckPath.length), value: truckPath[i] });
            }
        } else {
            keysPosition.push({ frame: 0, value: camera.position });
            keysPosition.push({ frame: ANIMATION_FRAME_RATE, value: target });
        }

        keysAlpha.push({ frame: 0, value: camera.alpha });
        keysAlpha.push({ frame: ANIMATION_FRAME_RATE, value: position.alpha });

        keysBeta.push({ frame: 0, value: camera.beta });
        keysBeta.push({ frame: ANIMATION_FRAME_RATE, value: position.beta });

        keysRadius.push({ frame: 0, value: camera.radius });
        keysRadius.push({ frame: ANIMATION_FRAME_RATE, value: position.radius });

        keysRotationZ.push({ frame: 0, value: camera.rotation.z });
        keysRotationZ.push({ frame: ANIMATION_FRAME_RATE, value: rotationOffset });

        animationPosition.setKeys(keysPosition);
        animationAlpha.setKeys(keysAlpha);
        animationBeta.setKeys(keysBeta);
        animationRadius.setKeys(keysRadius);
        animationRotationZ.setKeys(keysRotationZ);

        camera.animations = [animationPosition, animationAlpha, animationBeta, animationRadius, animationRotationZ];

        scene.beginAnimation(camera, 0, ANIMATION_FRAME_RATE, false, 1, () => {
            currentCameraIndex++;
            setTimeout(animateCamera, TRANSITION_DURATION);
        });
    };

    animateCamera();

    // Add neon lights
    const createNeonLight = (position, color) => {
        const light = new BABYLON.PointLight("neonLight", position, scene);
        light.diffuse = new BABYLON.Color3(...color);
        light.specular = new BABYLON.Color3(...color);
        light.intensity = 0.8;
    };

    createNeonLight(new BABYLON.Vector3(5, 10, 5), [0, 0, 1]); // Blue light
    createNeonLight(new BABYLON.Vector3(-5, 10, -5), [1, 0, 0]); // Red light
    createNeonLight(new BABYLON.Vector3(0, 15, 0), [0, 1, 0]); // Green light

    return scene;
}
