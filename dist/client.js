"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = __importDefault(require("three"));
const scene = new three_1.default.Scene();
const camera = new three_1.default.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;
const renderer = new three_1.default.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new three_1.default.BoxGeometry();
const material = new three_1.default.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
const cube = new three_1.default.Mesh(geometry, material);
scene.add(cube);
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    render();
};
function render() {
    renderer.render(scene, camera);
}
animate();
//# sourceMappingURL=client.js.map