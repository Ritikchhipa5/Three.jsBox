import React, { useEffect } from "react";
import * as THREE from "three";
import "./App.css";
function App() {
  useEffect(() => {
    let camera, scene, render, mesh;
    let aspect = window.innerWidth / window.innerHeight;
    initialize();
    Render();
    animate();
    // Render();
    function initialize() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

      // Camera Positon
      camera.position.z = 5;

      //Create Box Geomentry
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const texture = new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif"
      );
      const material = new THREE.MeshBasicMaterial({ map: texture });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }

    function Render() {
      render = new THREE.WebGLRenderer({ antialias: true });
      render.setSize(window.innerWidth, window.innerHeight);
      render.setPixelRatio(devicePixelRatio);
    }
    function animate() {
      requestAnimationFrame(animate);
      render.render(scene, camera);
      document.body.appendChild(render.domElement);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
