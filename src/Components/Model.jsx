import {
  OrbitControls,
  PresentationControls,
  Stars,
  Text,
  Text3D,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing"


const Model = ({setshow,setprjects,setcontact,setloader}) => {
  const model = useGLTF("/halloween_haunted_house.glb");
  const castshadows = useRef();

  const {progress} = useProgress();

  useEffect(() => {
    castshadows.current.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  useEffect(() => {
    if(progress == 100){
        setTimeout(() => {
          setloader(false)
        }, 10000);
    }
  },[progress]);

  const { camera, gl } = useThree();
  extend(OrbitControls);

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <primitive ref={castshadows} object={model.scene} scale={0.1} />
      <ambientLight />
      <pointLight position={[0, -15, 0]} castShadow />
      <mesh scale={5} position={[0,2,-10]}>
        <sphereGeometry/>
        <meshBasicMaterial color={[1.1,1.1,0.5]} />
      </mesh>
      <EffectComposer>
        <Bloom intensity={0.5} />
      </EffectComposer>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        font="public/Black Witcher.otf"
        position={[0, -2.2, 1]}
      >
        DEEPANSHU SOLANKI
      </Text>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        font="public/Black Witcher.otf"
        position={[0, -3.2, 1]}
      >
        I'm Web Developer
      </Text>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        font="public/Black Witcher.otf"
        position={[0, -6.2, 1]}
        onClick={() => setshow(true)}
      >
        Skills
      </Text>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        font="public/Black Witcher.otf"
        position={[0, -7.2, 1]}
        onClick={() => setprjects(true)}
      >
        Projects
      </Text>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        font="public/Black Witcher.otf"
        position={[0, -8.2, 1]}
        onClick={() => setcontact(true)}
      >
        Contact
      </Text>
    </>
  );
};

export default Model;
