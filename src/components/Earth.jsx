import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import earthtexture from '../assets/earth.jpeg'
import { Link } from "react-router-dom";

function Earth(props) {

  const mountRef = useRef(null);
  const {exit} = props.exit;
  const isLerping = useRef(true);
  const exitRef = useRef(exit);
  const zoomedOutRef = useRef(false);
  const ccRef = useRef();

  let animate1, animate2;
  const width = window.innerWidth, height = window.innerHeight;
  // make a camera
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);    
  camera.position.set(2, 5, -15);
  camera.lookAt(0, 0, 0);

  // make a scene
  const scene = new THREE.Scene();

  // creating a light source
  const light = new THREE.DirectionalLight(0xffffff, 2, 10);
  light.position.set(5, 0, 0);

  // creating another dim light source
  const nightlight = new THREE.AmbientLight(0xffffff, 0.03, 10);
  nightlight.position.set(-5, 0, 0);

  // loading the earth texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(earthtexture);

  // creating and adding the earth
  const SphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
  const SphereMaterial = new THREE.MeshPhysicalMaterial({ map: texture });
  const sphere = new THREE.Mesh(SphereGeometry, SphereMaterial);
  sphere.position.set(0, 0, 0);

  const gridHelper = new THREE.GridHelper(50, 100);
  let renderer = new THREE.WebGLRenderer({ antialias: true });

  // creating orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  useEffect(() => {
    
    scene.add(light);
    scene.add(nightlight);
    scene.add(sphere);

    //  Some helper objects
    
    // scene.add(gridHelper);
    // const plhelper = new THREE.PointLightHelper(light);
    // scene.add(plhelper); 

    // creating the renderer
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // zoom-in animation
    const target = new THREE.Vector3(2, 0, 2);
    
    
    // animation loop
    const animate = function (time) {
      animate1 = requestAnimationFrame(animate);
    
      if (isLerping.current) {
        camera.position.lerp(target, 0.025);
        if (camera.position.distanceTo(target) < 0.01) {
          isLerping.current = false;
        }
        controls.update();
      }
      sphere.rotation.y += 0.0025;
      renderer.render(scene, camera);
    };
    animate();

    // cleanup function
    return () => {
      cancelAnimationFrame(animate1)
     }
  }, []);

  useEffect(()=> {
    exitRef.current = exit;

    function zoomOut() {
      let targetPosition = new THREE.Vector3(-45, 5, 40); // Define the target position to zoom out
      camera.position.lerp(targetPosition, 0.05);
      if (camera.position.distanceTo(targetPosition) < 1) {
        exitRef.current = false;
        zoomedOutRef.current = true;
      }
    }

    const animate = function (time) {
      if(!zoomedOutRef.current) {
        animate2 = requestAnimationFrame(animate);
      }

      if(exitRef.current) {
        zoomOut();
        controls.update();
      }

      if(zoomedOutRef.current) {
        if(ccRef.current) {ccRef.current.click()}
      }

      renderer.render(scene, camera);
     
    }
    animate();
     
  }, [exit])
  

  return <><div ref={mountRef} />
  <Link ref={ccRef} to='/cc'></Link>
  </>;
}

export default Earth;