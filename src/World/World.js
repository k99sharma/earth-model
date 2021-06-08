// components
import { createCamera } from './Components/Camera.js';
import { createScene } from './Components/Scene.js';
import { createEarth } from './Components/Earth.js';
import { createLight } from './Components/Light.js';

// system
import { createRenderer } from './System/renderer.js';
import { Resizer } from './System/resizer.js';
import { Loop } from './System/loop.js';


// module specified variables
let camera;
let scene;
let renderer;
let loop;

// World Class
class World{
    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const earth = createEarth();
        scene.add(earth);

        // light
        const light = createLight();
        scene.add(light);

        const resizer = new Resizer(container, camera, renderer);
        loop = new Loop(camera, scene, renderer);
        loop.updatables.push(earth);
    }

    render(){
        renderer.render(scene, camera);
    }

    start(){
        loop.start();
    }

    stop(){
        loop.stop();
    }
}


export { World };