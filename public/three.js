import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const scene = new Scene();
scene.background = new Color("skyblue");
const fov = 35;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, 1, near, far);
camera.position.set(0, 0, 10);
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);
const renderer = new WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
document.body.append(renderer.domElement);
renderer.render(scene, camera);
