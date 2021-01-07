import * as React from "react";

import { degToRad } from "scripts";
import { Grid } from "components";
import * as THREE from "three";
import { useUpdate } from "react-three-fiber";

export const RenderSide = ({
  rotation = [0, 0, 0],
  planeRotation = [0, 0, 0],
  planePosition = [0, 0, 0],
}) => {
  const meshRef = useUpdate(
    (geometry) => {
      geometry.rotation.x = degToRad(planeRotation[0]);
      geometry.rotation.y = degToRad(planeRotation[1]);
      geometry.rotation.z = degToRad(planeRotation[2]);
      geometry.position.x = planePosition[0];
      geometry.position.y = planePosition[1];
      geometry.position.z = planePosition[2];
    },
    [planeRotation, planePosition],
  );

  return (
    <>
      <Grid rotation={rotation} />
      <mesh ref={meshRef}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshBasicMaterial attach="material" color="rgb(184, 184, 187)" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};
