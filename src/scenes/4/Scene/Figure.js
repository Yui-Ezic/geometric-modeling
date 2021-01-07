import * as React from "react";

import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import textureUrl from "../figure-white.jpg";

const TextureMaterial = ({
  offsetX = 0,
  offsetY = 0,
}) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  React.useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 4);
    texture.offset.x = offsetX;
    texture.offset.y = offsetY;
  }, [texture, offsetX, offsetY]);

  return <meshPhongMaterial attach="material" map={texture} />;
};

const Fallback = () => null;

export const Figure = ({
  radiusTop = 2,
  radiusBottom = 2,
  height = 7,
  radialSegments = 32,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  scaleX = 1,
  scaleY = 1,
  scaleZ = 1,
  useTexture = false,
  offsetX = 0,
  offsetY = 0,
  rotate = false,
  ...props
}) => {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (rotate && mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    } else {
      mesh.current.rotation.x = 0;
    }
  });

  return (
    <React.Suspense fallback={<Fallback />}>
      <mesh
        ref={mesh}
        position={[positionX, positionY, positionZ]}
        scale={[scaleX, scaleY, scaleZ]}
        {...props}
      >
        <cylinderGeometry args={[radiusTop, radiusBottom, height, radialSegments]} />
        {useTexture ? <TextureMaterial offsetX={offsetX} offsetY={offsetY}/> : <meshNormalMaterial color="hotpink" />}
      </mesh>
    </React.Suspense>
  );
};
