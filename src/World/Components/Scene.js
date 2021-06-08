// Scene object
import { Scene, Color, AmbientLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const createScene = ()=>{
    const scene = new Scene();
    scene.background = new Color('black');

    const ambientLight = new AmbientLight(0x333333);
    scene.add(ambientLight);
    
    return scene;
}

export { createScene };