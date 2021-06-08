import { World } from './World/World.js';

const main = () => {
    const container = document.querySelector('#scene-container');

    // world
    const world = new World(container);

    world.start();
}

main();