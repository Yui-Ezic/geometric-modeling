import * as React from "react";

import { useUpdate } from "react-three-fiber";


export const ProjectionWrapper = ({
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  scaleX = 1,
  scaleY = 1,
  scaleZ = 1,
  children,
}) => {
  const ref = useUpdate(
    (geometry) => {
      geometry.scale.x = scaleX;
      geometry.scale.y = scaleY;
      geometry.scale.z = scaleZ;

      geometry.position.x = positionX;
      geometry.position.y = positionY;
      geometry.position.z = positionZ;
    },
    [positionX, positionY, positionZ, scaleX, scaleY, scaleZ],
  );
  return <group ref={ref}>{children}</group>;
};
