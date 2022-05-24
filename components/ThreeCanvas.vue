<!-- TODO:Add a handler to prevent zooming outside sphere -->
<template>
  <div id="scene" ref="canvas"></div>
</template>

<script lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
let clicked;
export default {
  props: {
    img: String,
  },
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

    renderer.setSize(container.clientWidth, container.clientHeight);
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
      mesh.name = "sphere";
      scene.add(mesh);
      mesh.position.set(0, 0, 0);
    });
    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 20, 100);
    controls.maxZoom = 5;
    // controls.enableZoom = false;
    controls.enableDamping = true;
    controls.update();
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      renderer.setSize(container.clientWidth, container.clientHeight);

      scene.getObjectByName("sphere").rotateY(0.001);
    }

    animate();
  },
};
</script>

<style>
#scene {
  position: absolute;
  z-index: -1;
}
</style>
