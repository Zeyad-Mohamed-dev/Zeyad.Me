import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Planet(props) {
  const { nodes, materials } = useGLTF('/3dmodels/Planet.glb')
  const conatainerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(conatainerRef.current.position, {
      y: 5,
      duration: 3,
      ease: 'circ.out'
    })
  })
  return (
    <group {...props} dispose={null} ref={conatainerRef}>
      <group>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        rotation={[0, 0, 0.741]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials['Material.001']}
        position={[0.647, 1.03, -0.724]}
        rotation={[0, 0, 0.741]}
        scale={0.223}
      />
      </group>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
      
    </group>
  )
}

useGLTF.preload('/3dmodels/Planet.glb');