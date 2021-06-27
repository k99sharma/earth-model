import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

// array to keep track of previous marker
const previousMarkers = [];

// function to create marker
function createMarker() {
  const geometry = new THREE.SphereGeometry(5, 32, 32);

  const material = new THREE.MeshStandardMaterial({
    color: "red",
  });

  const mesh = new THREE.Mesh(geometry, material);
  previousMarkers.push(mesh.uuid);

  return mesh;
}

// function to find positon on model
function findPosition(lat, lng) {
  const R = 200;
  var phi = ((90 - lat) * Math.PI) / 180;
  var theta = ((180 + lng) * Math.PI) / 180;

  const x = -R * Math.sin(phi) * Math.cos(theta);
  const y = R * Math.cos(phi);
  const z = R * Math.sin(phi) * Math.sin(theta);

  return { x: x, y: y, z: z };
}

// function to remove marker
function deletePreviousMarker(earth) {
  // check if there are elements in array
  if (previousMarkers.length > 0) {
    // code to delete marker
    const previousMarkerId = previousMarkers[0]; // look for id
    const previousMarker = earth.getObjectByProperty("uuid", previousMarkerId); // get childern using id from parent mesh

    previousMarker.material.dispose(); // disposing mesh material
    previousMarker.geometry.dispose(); // disposing mesh geometry
    earth.remove(previousMarker); // disposing mesh

    // removing element from array
    previousMarkers.pop();
  }
}

function markLocation(lat, lng, earth) {
  // check for any marker already marked
  deletePreviousMarker(earth);

  // creating marker
  const marker = createMarker();

  // finding position
  const position = findPosition(lat, lng);

  // setting marker position
  marker.position.x = position.x;
  marker.position.y = position.y;
  marker.position.z = position.z;

  return marker;
}

export { markLocation };
