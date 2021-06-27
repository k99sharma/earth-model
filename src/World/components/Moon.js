import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const textureLoader = new THREE.TextureLoader();

function createMoon() {
  const geometry = new THREE.SphereGeometry(55, 32, 32);
  const moon_texture = textureLoader.load(
    "/src/World/assets/textures/moon/moon_texture.jpg"
  );

  const material = new THREE.MeshPhongMaterial({
    map: moon_texture,
  });

  const moon = new THREE.Mesh(geometry, material);
  moon.position.set(650, 0, 650);

  moon.tick = (delta) => {
    moon.rotation.y += (1 / 16) * delta;
  };

  return moon;
}

export { createMoon };
