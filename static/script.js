// script.js

// Set the background image dynamically
document.body.style.background = "url('" + "{{ url_for('static', filename='background.jpg') }}" + "') no-repeat center center fixed";
document.body.style.backgroundSize = "cover";

// Three.js script for a cool 3D geometrical shape
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create an icosahedron geometry
var geometry = new THREE.IcosahedronGeometry(2, 0);
var material = new THREE.MeshBasicMaterial({ color: 0x156289, wireframe: true });
var icosahedron = new THREE.Mesh(geometry, material);
scene.add(icosahedron);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    icosahedron.rotation.x += 0.01;
    icosahedron.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

// Adjust 3D canvas size on window resize
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});