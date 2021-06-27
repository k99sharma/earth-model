import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

const createClouds = () => {
  const canvasCloud = textureLoader.load(
    "/src/World/assets/textures/earth/earth_clouds.png"
  );

  const geometry = new THREE.SphereGeometry(200.01, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    map: canvasCloud,
    transparent: true,
    depthTest: false,
  });

  const cloudMesh = new THREE.Mesh(geometry, material);

  return cloudMesh;
};

function createMaterial() {
  const material = new THREE.MeshPhongMaterial();

  // earth map
  const earthMap = textureLoader.load(
    "/src/World/assets/textures/earth/earth_map.jpg"
  );
  material.map = earthMap;

  // bump
  const earthBump = textureLoader.load(
    "/src/World/assets/textures/earth/earth_bump.jpg"
  );
  material.bumpMap = earthBump;
  material.bumpScale = 0.005;

  // specular map
  const earthSpecular = textureLoader.load(
    "/src/World/assets/textures/earth/earth_specular.png"
  );
  material.specularMap = earthSpecular;
  material.specular = new THREE.Color("grey");

  return material;
}

function createEarth() {
  const geometry = new THREE.SphereGeometry(200, 32, 32);

  const cloudMesh = createClouds();

  const material = new createMaterial();

  const earth = new THREE.Mesh(geometry, material);
  earth.add(cloudMesh);

  earth.tick = (delta) => {
    cloudMesh.rotation.y += (1 / 16) * delta;
    earth.rotation.y += (1 / 28) * delta;
  };

  return earth;
}

export { createEarth };
