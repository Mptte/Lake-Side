<!-- TODO:Add a handler to prevent zooming outside sphere -->
<template>
  <div id="scene" ref="canvas"></div>
</template>

<script lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
let clicked;
export default {
  mounted() {
    const container = document.getElementById("scene");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var loader = new THREE.TextureLoader();
    loader.load("/panaroma.png", function (texture) {
      var sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
      var sphereMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      sphereGeometry.scale(-1, 1, 1);
      var mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(mesh);
      mesh.position.set(0, 0, 0);
    });
    const controls = new OrbitControls(camera, renderer.domElement);
    document.addEventListener("click", () => {
      let clicked = true;
    });

    //controls.update() must be called after any manual changes to the camera's transform
    while ((clicked = false)) {
      camera.rotation.x = -1;
    }
    camera.position.set(0, 20, 100);
    controls.maxZoom = 5;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.update();
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate();
  },
};
</script>

<style>
#scene {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
}
</style>
