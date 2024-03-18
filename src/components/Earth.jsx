import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function Earth() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth,
      height = window.innerHeight;

    // init
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(2.5, 0, 2);
    camera.lookAt(0, 0, 0);
    const scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 2, 10);
    light.position.set(5, 0, 0);
    scene.add(light);

    const nightlight = new THREE.AmbientLight(0xffffff, 0.03, 10);
    nightlight.position.set(-5, 0, 0);
    scene.add(nightlight);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("src/components/earth.jpeg");

    const SphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const SphereMaterial = new THREE.MeshPhysicalMaterial({ map: texture });
    const sphere = new THREE.Mesh(SphereGeometry, SphereMaterial);
    scene.add(sphere);
    sphere.position.set(0, 0, 0);

    const gridHelper = new THREE.GridHelper(50, 100);
    // scene.add(gridHelper);
    const plhelper = new THREE.PointLightHelper(light);
    // scene.add(plhelper);

    // Create an empty BufferGeometry
    const starGeometry = new THREE.BufferGeometry();

    // Create an array to store the positions of the stars
    const starPositions = [];

    // Creating 500 stars
    for (let i = 0; i < 1000; i++) {
      // Generate a random position for each star
      const x = THREE.MathUtils.randFloatSpread(2000); // spread in a range of -1000 to 1000 on the x-axis
      const y = THREE.MathUtils.randFloatSpread(2000); // spread in a range of -1000 to 1000 on the y-axis
      const z = THREE.MathUtils.randFloatSpread(2000); // spread in a range of -1000 to 1000 on the z-axis

      // Add the position to the array
      starPositions.push(x, y, z);
    }

    // Add the positions to the geometry
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));

    // Create a PointsMaterial
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    // Create a Points object with the geometry and material
    const stars = new THREE.Points(starGeometry, starMaterial);

    // Add the stars to the scene
    scene.add(stars);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = function (time) {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0035;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}

export default Earth;
