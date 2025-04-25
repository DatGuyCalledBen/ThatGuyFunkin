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

// ————————————————————————————————
// GLOBAL STATE & CONFIG
// ————————————————————————————————
let currentCameraIndex  = 0;
let useTheatricalCamera = true;

// Dummy targets
const D1 = new BABYLON.Vector3(-0.99, 2.51, 0.99);
const D2 = new BABYLON.Vector3( 2.01, 0.51,-0.01);

// Timing (ms)
const switchInterval = (3 * 60 / (BPM * QuantisationFactor)) * 1000;

// ————————————————————————————————
// CAMERA SETUP
// ————————————————————————————————
const camera = new BABYLON.ArcRotateCamera(
  "camera", Math.PI/4, Math.PI/4, 60,
  new BABYLON.Vector3(-1,2.5,1), scene
);
camera.attachControl(canvas, true);

// Fixed cameras
const fixedCameras = [
  new BABYLON.FreeCamera("fc1", new BABYLON.Vector3(-4,3.5,-4), scene),
  new BABYLON.FreeCamera("fc2", new BABYLON.Vector3( 4,0.5,-4), scene),
  new BABYLON.FreeCamera("fc3", new BABYLON.Vector3( 2.5,3.5, 2.5), scene),
  new BABYLON.FreeCamera("fc4", new BABYLON.Vector3( 2,5, -5), scene),
  new BABYLON.FreeCamera("fc5", new BABYLON.Vector3(-2.5,0.5,-2.5), scene)
];
fixedCameras.forEach(applyCameraShake);

// Theatrical presets…
const cameraPositions = [
  { alpha:-Math.PI/2, beta: Math.PI/3, radius:getRandomInt(5,25) },
  /* …etc… */
];

// ————————————————————————————————
// TRANSITION (ArcRotateCamera)
// ————————————————————————————————
function transitionToNextCamera(onDone) {
  // pick nextPos and nextIdx
  let nextPos, nextIdx;
  if (useTheatricalCamera) {
    nextIdx = getRandomInt(0, cameraPositions.length);
    nextPos = cameraPositions[nextIdx];
  } else {
    currentCameraIndex = (currentCameraIndex + 1) % fixedCameras.length;
    const f = fixedCameras[currentCameraIndex];
    nextPos = {
      alpha: f.alpha, beta: f.beta, radius: f.radius,
      position: f.position,
      rotationOffset: f.rotationOffset
    };
  }
  if (!nextPos || nextPos.alpha === undefined) {
    console.error("Invalid nextPos");
    if (onDone) onDone();
    return;
  }

  // clear existing tweens
  scene.stopAnimation(camera);
  camera.animations.length = 0;

  // easing + frame counts
  const ease        = new BABYLON.CubicEase();
  ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
  const sf          = 60;
  const aFrames     = Math.max(1, Math.abs(nextPos.alpha  - camera.alpha)  * sf);
  const bFrames     = Math.max(1, Math.abs(nextPos.beta   - camera.beta)   * sf);
  const rFrames     = Math.max(1, Math.abs(nextPos.radius - camera.radius) * sf);

  // alpha
  BABYLON.Animation.CreateAndStartAnimation(
    'a', camera, 'alpha', 60, aFrames,
    camera.alpha, nextPos.alpha,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
    ease
  );

  // beta
  BABYLON.Animation.CreateAndStartAnimation(
    'b', camera, 'beta', 60, bFrames,
    camera.beta,  nextPos.beta,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
    ease
  );

  // radius + complete
  BABYLON.Animation.CreateAndStartAnimation(
    'r', camera, 'radius', 60, rFrames,
    camera.radius, nextPos.radius,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
    ease,
    () => {
      if (useTheatricalCamera) currentCameraIndex = nextIdx;
      panCamera(camera);
      rotateCamera(camera);
      onDone && onDone();
    }
  );

  // immediate props
  camera.setTarget(nextPos.target || new BABYLON.Vector3(-1.25,2.5,1.25));
  if (nextPos.position)       camera.position       = nextPos.position;
  if (nextPos.rotationOffset !== undefined) {
    camera.rotationOffset = nextPos.rotationOffset;
  }
}

function applyCameraShake(cam, intensity=0.01, frequency=60) {
  const shake = new BABYLON.Animation("shake", "position", frequency, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  const keys = [];
  for (let f = 0; f <= 120; f++) {
    keys.push({
      frame: f,
      value: new BABYLON.Vector3(
        cam.position.x + (Math.random()-0.5)*intensity,
        cam.position.y + (Math.random()-0.5)*intensity,
        cam.position.z + (Math.random()-0.5)*intensity
      )
    });
  }
  shake.setKeys(keys);
  cam.animations.push(shake);
  scene.beginAnimation(cam,0,120,true);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// ————————————————————————————————
// SWITCH LOGIC (runs every interval)
// ————————————————————————————————
function switchCameras() {
  if (useTheatricalCamera) {
    scene.activeCamera = camera;
    transitionToNextCamera(() => {
      camera.setTarget(getRandomInt(0,5) === 0 ? D2 : D1);
    });
  } else {
    // fixed camera branch
    const fc = fixedCameras[getRandomInt(0, fixedCameras.length)];
    scene.activeCamera = fc;
    scene.stopAnimation(fc);
    fc.animations.length = 0;
    const D = getRandomInt(0,5) === 0 ? D2 : D1;
    fc.setTarget(D);
    panCamera(fc);
    rotateCamera(fc);
  }
  useTheatricalCamera = !useTheatricalCamera;
}

// kick off
panCamera(camera);
rotateCamera(camera);
setInterval(switchCameras, switchInterval);


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

