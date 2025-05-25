"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WireframeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(60, 30, 120, 60);
    const material = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 10;

    let animationFrameId: number;

    const sourcePoints = [
      { x: -15, y: 5, amplitude: 1.5, frequency: 0.3, speed: 0.0015, maxRadius: 25 },
      { x: 15, y: -5, amplitude: 1.2, frequency: 0.25, speed: 0.0012, maxRadius: 30 },
      { x: 0, y: 10, amplitude: 1.0, frequency: 0.35, speed: 0.0018, maxRadius: 20 },
      // Add more source points here if desired
    ];

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const vertices = geometry.attributes.position.array as Float32Array;
      const originalPositions = geometry.userData.originalPositions as Float32Array;
      const numVertices = vertices.length / 3;

      const currentMouseX = mousePosRef.current.x;
      const currentMouseY = mousePosRef.current.y;

      const mouseWorldX = currentMouseX * (geometry.parameters.width / 2);
      const mouseWorldY = currentMouseY * (geometry.parameters.height / 2);

      for (let i = 0; i < numVertices; i++) {
        const i3 = i * 3;
        const vertX = originalPositions[i3];
        const vertY = originalPositions[i3 + 1];

        let totalRippleEffect = 0;

        for (const source of sourcePoints) {
          const dxSource = vertX - source.x;
          const dySource = vertY - source.y;
          const distanceToSource = Math.sqrt(dxSource * dxSource + dySource * dySource);

          if (distanceToSource < source.maxRadius) {
            const waveValue = source.amplitude * Math.sin(distanceToSource * source.frequency - time * source.speed);
            const falloff = Math.max(0, (source.maxRadius - distanceToSource) / source.maxRadius); // Linear falloff
            totalRippleEffect += waveValue * falloff * falloff; // Quadratic falloff for smoother edges
          }
        }

        let zOffset = totalRippleEffect;

        // Mouse Interaction
        const dxMouse = vertX - mouseWorldX;
        const dyMouse = vertY - mouseWorldY;
        const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        const mouseMaxDistance = 15.0;
        const mouseInfluence = Math.max(0, 1 - distanceToMouse / mouseMaxDistance);
        const bendFactor = 15.0;

        zOffset -= mouseInfluence * mouseInfluence * bendFactor;

        vertices[i3 + 2] = zOffset;

        // Log for the first vertex for debugging (can be removed or kept for tuning)
        if (i === 0 && Math.random() < 0.01) {
          // console.log("Mouse Ref:", currentMouseX, currentMouseY);
          // console.log("Mouse World:", mouseWorldX, mouseWorldY);
          // console.log("Distance to mouse:", distanceToMouse);
          // console.log("Mouse Influence:", mouseInfluence);
          // console.log("zOffset for vertex 0:", zOffset);
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    if (!geometry.userData.originalPositions) {
      geometry.userData.originalPositions = Float32Array.from(geometry.attributes.position.array);
    }

    animate(0);

    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default WireframeBackground;
