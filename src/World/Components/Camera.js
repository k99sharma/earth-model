// Camera object
import { PerspectiveCamera, Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const createCamera = ()=>{
    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new PerspectiveCamera(45, width/height, 0.01, 1000);

    // positioning camera
     camera.position.set(0, 0, 1.5);

     return camera;
}

export { createCamera };