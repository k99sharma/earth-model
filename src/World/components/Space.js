import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

function createSpace() {
  const geometry = new THREE.SphereGeometry(900, 32, 32);
  const space_texture = textureLoader.load(
    "/src/World/assets/textures/space/milkyway_map.jpg"
  );

  const material = new THREE.MeshBasicMaterial({
    map: space_texture,
    side: THREE.BackSide,
  });

  const space = new THREE.Mesh(geometry, material);

  return space;
}

export { createSpace };
