// Earth project
import {
    SphereGeometry,
    MeshPhongMaterial,
    Mesh,
    TextureLoader,
    Color
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const textureLoader = new TextureLoader(); 

const createClouds = ()=>{
    const canvasCloud = textureLoader.load('/src/World/assets/textures/earth_clouds.png');

    const geometry   = new SphereGeometry(0.503, 32, 32);
    const material  = new MeshPhongMaterial({
        map : canvasCloud,
        transparent : true,
        depthTest : false
    });

    const cloudMesh = new Mesh(geometry, material);

    return cloudMesh;
}

const createMaterial = ()=>{
   const material = new MeshPhongMaterial();

   // earthMap 
   const earthMap = textureLoader.load('/src/World/assets/textures/earth_map.jpg');
   material.map = earthMap;

   // bump 
   const earthBump = textureLoader.load('/src/World/assets/textures/earth_bump.jpg');
   material.bumpMap = earthBump;
   material.bumpScale = 0.005;

   // specular map
   const earthSpecular = textureLoader.load('/src/World/assets/textures/earth_specular.png');
   material.specularMap = earthSpecular;
   material.specular = new Color('grey');

   return material;
}

const createEarth = ()=>{
    const geometry = new SphereGeometry(0.5, 32, 32);
    const material = createMaterial();

    const cloudMesh = createClouds();
    
    const earth = new Mesh(geometry, material);
    earth.add(cloudMesh);

    earth.tick = (delta)=>{
        cloudMesh.rotation.y += 1 / 8 * delta;
        earth.rotation.y += 1 / 16 * delta;
    };

    return earth;
}

export { createEarth };