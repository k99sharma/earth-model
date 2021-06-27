import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createScene(){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    return scene;
}

export { createScene };