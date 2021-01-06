import * as React from "react";

import { useUpdate } from "react-three-fiber";

import { useField } from "scripts";
import { prefix } from "..";

export const RotationPoint = () => {
  const [posX] = useField(`${prefix}rotation-point-x`);
  const [posY] = useField(`${prefix}rotation-point-y`);

  const meshRef = useUpdate(
    (geometry) => {
      geometry.position.x = posX;
      geometry.position.y = posY;
    },
    [posX, posY]
  );

  return (
    <mesh ref={meshRef} name="2SceneRotationPoint">
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color="#1cd04b" />
    </mesh>
  );
};
