export function createScene(engine, canvas) {
    const scene = new BABYLON.Scene(engine);
    const BPM = 70;
    const QuantisationFactor = 1 / 16000;
    const ANIMATION_FRAME_RATE = 60;
    const ANIMATION_DURATION = 6000;
    const TRANSITION_DURATION = 60 / (BPM * QuantisationFactor);

    // Default background color
    scene.clearColor = new BABYLON.Color3(0.9, 0.9, 0.9); // Light grey for a minimalist feel

    // Material for a minimalist look
    const createMinimalistMaterial = (color) => {
        let material = new BABYLON.StandardMaterial("material", scene);
        material.diffuseColor = new BABYLON.Color3(...color);
        material.specularColor = new BABYLON.Color3(0, 0, 0); // No specular highlights
        material.emissiveColor = new BABYLON.Color3(...color);
        material.backFaceCulling = false; // Ensure it looks good from all angles
        return material;
    };

    // Add simple geometric buildings
    const addBuilding = (name, dimensions, position, color) => {
        const building = BABYLON.MeshBuilder.CreateBox(name, dimensions, scene);
        building.position = position;
        building.material = createMinimalistMaterial(color);
    };

    addBuilding("building1", { width: 4, height: 8, depth: 4 }, new BABYLON.Vector3(5, 4, 6), [0.2, 0.2, 0.2]);
    addBuilding("building2", { width: 6, height: 12, depth: 6 }, new BABYLON.Vector3(9, 6, -8), [0.3, 0.3, 0.3]);

    // Add box (stage cube)
    const addBox = (name, size, position, color) => {
        const box = BABYLON.MeshBuilder.CreateBox(name, { size }, scene);
        box.position = position;
        box.material = createMinimalistMaterial(color);
    };

    addBox("box", 1.5, new BABYLON.Vector3(-1.25, 0.75, 1.25), [0.4, 0.4, 0.4]);

    // Add pyramid
    const addPyramid = (name, dimensions, position, color) => {
        const pyramid = BABYLON.MeshBuilder.CreateCylinder(name, dimensions, scene);
        pyramid.position = position;
        pyramid.material = createMinimalistMaterial(color);
    };

    addPyramid("pyramid", { diameterTop: 0, diameterBottom: 1.5, height: 2.5, tessellation: 4 }, new BABYLON.Vector3(3, 1.25, 3), [0.2, 0.2, 0.2]);

    // Add cone
    addPyramid("cone", { diameterTop: 0, diameterBottom: 1.5, height: 2.5, tessellation: 8 }, new BABYLON.Vector3(-3, 1.25, -3), [0.6, 0.6, 0.6]);

    // Add massive cuboid (skyscraper)
    addBuilding("skyscraper", { width: 5, height: 16, depth: 5 }, new BABYLON.Vector3(-5.75, 8, 5.75), [0.25, 0.25, 0.25]);

    // Add tiny stairs
    const stepHeight = 0.04;
    const stepDepth = 0.08;
    const stepWidth = 2;
    const numberOfSteps = Math.ceil(1.5 / stepHeight);

    for (let i = 0; i < numberOfSteps; i++) {
        addBuilding(`step${i}`, { width: stepWidth, height: stepHeight, depth: stepDepth }, new BABYLON.Vector3(-3.5 + (stepWidth - 1.5) / 2, 1 - (i * stepHeight), 1.75 - (i * stepDepth)), [0.4, 0.4, 0.4]);
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
        { alpha: 0, beta: Math.PI / 4, radius: 20, panPath: [...Array(360).keys()].map(i => new BABYLON.Vector3(Math.cos(i * Math.PI / 180) * 20, 5 + i /180, Math.sin(i * Math.PI / 180) * 20)) } // Panoramic Shot
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

        const animation = new BABYLON.Animation("cameraAnimation", "position", ANIMATION_FRAME_RATE, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        const keys = [];

        if (panPath) {
            for (let i = 0; i < panPath.length; i++) {
                keys.push({ frame: i * (ANIMATION_FRAME_RATE / panPath.length), value: panPath[i] });
            }
        } else if (dollyPath) {
            for (let i = 0; i < dollyPath.length; i++) {
                keys.push({ frame: i * (ANIMATION_FRAME_RATE / dollyPath.length), value: dollyPath[i] });
            }
        } else if (truckPath) {
            for (let i = 0; i < truckPath.length; i++) {
                keys.push({ frame: i * (ANIMATION_FRAME_RATE / truckPath.length), value: truckPath[i] });
            }
        } else {
            keys.push({ frame: 0, value: camera.position });
            keys.push({ frame: ANIMATION_FRAME_RATE, value: target });
        }

        animation.setKeys(keys);
        camera.animations = [animation];

        scene.beginAnimation(camera, 0, ANIMATION_FRAME_RATE, false, 1, () => {
            camera.alpha = position.alpha;
            camera.beta = position.beta;
            camera.radius = position.radius;
            camera.rotation.z = rotationOffset;
            currentCameraIndex++;
            setTimeout(animateCamera, TRANSITION_DURATION);
        });
    };

    animateCamera();

    return scene;
}
