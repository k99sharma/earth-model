import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
 
    // restricting zoom in and zoom out
    controls.minDistance = 400;
    controls.maxDistance = 900;

    return controls;
}

export { createControls };