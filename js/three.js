import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

//장면
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff);

// 카메라
const camera = new THREE.PerspectiveCamera(5, 1920 / 919, 0.1, 1000);
camera.position.z = 200;

// 렌더러
var container =document.getElementById('intro');
const renderer = new THREE.WebGLRenderer({alpha: true,});//alpha 배경투명
renderer.setSize(1920, 919);
container.appendChild(renderer.domElement);

console.log(container)
// 빛
const light1 = new THREE.DirectionalLight(0xffffff, 1.6);
light1.position.set(-3,1.5,4);
scene.add(light1);
const light2 = new THREE.AmbientLight(0xffffff, 2.5);
scene.add(light2);
// const light1helper = new THREE.DirectionalLightHelper(light1, 0.3, 0x0000ff);
// scene.add(light1helper);

// 도형
const geometry = new THREE.SphereGeometry( 3, 64, 32 );
const material = new THREE.MeshPhysicalMaterial({color: 0x75C8D7, clearcoat: 0.01});
const obj00 = new THREE.Mesh( geometry, material );
obj00.position.x = -10.1
obj00.position.y = -3.6
scene.add( obj00 );

const geometry01 = new THREE.BoxGeometry(4.5,4.5,4.5);
const material01 = new THREE.MeshPhysicalMaterial({color: 0xffec4f, anisotropy: 0.5, clearcoat: 0.1});
const obj01 = new THREE.Mesh(geometry01, material01);
obj01.position.x = 12;
obj01.position.y = 1
scene.add(obj01);

const geometry02 = new THREE.TetrahedronGeometry(1.75,0);
const material02 = new THREE.MeshPhysicalMaterial({color:0x74B72B, clearcoat: 0.1});
const obj02 = new THREE.Mesh(geometry02, material02);
obj02.position.x = -8.1
obj02.position.y = 4.7
scene.add(obj02);

function animate() {
    requestAnimationFrame( animate );

    obj00.rotation.x += 0.005;
    obj00.rotation.y += 0.005;

    obj01.rotation.x += 0.008;
    obj01.rotation.y += -0.007;
    obj02.rotation.x += -0.01;
    obj02.rotation.y += -0.01;

    renderer.render( scene, camera );
}

animate();