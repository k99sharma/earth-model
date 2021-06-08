import { DirectionalLight, Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const createLight = ()=>{
    const light = new DirectionalLight(0xffffff, 1);

    // position light
    light.position.set(5,3,5);

    return light;
}

export { createLight };