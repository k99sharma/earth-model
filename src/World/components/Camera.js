import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCamera(container){
    const WIDTH = container.clientWidth;
    const HEIGHT = container.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 1, 10000);

    // positioning camera
    camera.position.set(0,0,700);
    
    return camera;
}

export { createCamera };