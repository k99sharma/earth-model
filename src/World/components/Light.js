import { DirectionalLight, AmbientLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const createLight = ()=>{
    const ambientLight = new AmbientLight('white', 1.5);

    const mainLight = new DirectionalLight('white', 2.5);

    // position light
    mainLight.position.set(5,3,5);

    return {mainLight, ambientLight};
}

export { createLight };