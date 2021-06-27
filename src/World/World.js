// importing components
import { createCamera } from "./components/Camera.js";
import { createEarth } from "./components/Earth.js";
import { createScene } from "./components/Scene.js";
import { createLight } from "./components/Light.js";
import { createSpace } from "./components/Space.js";
import { createMoon } from "./components/Moon.js";

// importing systems
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/resizer.js";
import { Loop } from "./systems/animationLoop.js";
import { createControls } from "./systems/cameraControls.js";
import { markLocation } from "./systems/locationFinder.js";

let loop;
let controls;
let resizer;

class World {
  constructor(container) {
    this.camera = createCamera(container);
    this.scene = createScene();
    this.earth = createEarth();
    this.moon = createMoon();
    this.space = createSpace();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    // adding moon to scene
    this.scene.add(this.moon);

    // adding earth to scene
    this.scene.add(this.earth);

    // adding space to scene
    this.scene.add(this.space);

    // adding lights to the scene
    const { mainLight, ambientLight } = createLight();
    this.scene.add(mainLight, ambientLight);

    // camera controls
    controls = createControls(this.camera, container);

    // on window resizing
    resizer = new Resizer(container, this.camera, this.renderer);

    // animation loop
    loop = new Loop(this.camera, this.scene, this.renderer);
    loop.updatables.push(this.earth, this.moon);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  findLocation(lat, lng) {
    const marker = markLocation(lat, lng, this.earth);
    this.earth.add(marker);
  }
}

export { World };
