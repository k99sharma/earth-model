import { WebGLRenderer } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const createRenderer = ()=>{
    const renderer = new WebGLRenderer({ antialias : true });

    return renderer;
}

export { createRenderer };