import React from "react";

import { useField } from "../../../scripts";

import { prefix } from "..";
import * as THREE from "three";
import { useUpdate } from "react-three-fiber";

const Triangles = () => {
  const [N] = useField(`${prefix}squareSideSize`);
  const [cornerCircleRadius] = useField(`${prefix}cornerCircleRadius`);
  const [outterCircleRadius] = useField(`${prefix}outterCircleRadius`);

  const diagonal = Math.sqrt(2) * N;

  const vertices = React.useMemo(() => {
    const spaceFromCenter = (diagonal / 2) - cornerCircleRadius;

    const points = [
      [spaceFromCenter, cornerCircleRadius],
      [outterCircleRadius, 0],
      [spaceFromCenter, -cornerCircleRadius],
      [cornerCircleRadius, -spaceFromCenter],
      [0, -outterCircleRadius],
      [-cornerCircleRadius, -spaceFromCenter],
      [-spaceFromCenter, -cornerCircleRadius],
      [-outterCircleRadius, 0],
      [-spaceFromCenter, cornerCircleRadius],
      [-cornerCircleRadius, spaceFromCenter],
      [0, outterCircleRadius],
      [cornerCircleRadius, spaceFromCenter],
    ];

    const path = new THREE.Path();
    const firstPoint = points[0];

    path.moveTo(firstPoint[0], firstPoint[1]);
    points.forEach((point) => path.lineTo(point[0], point[1]));
    path.closePath();

    return path.getPoints();
  }, [diagonal, cornerCircleRadius, outterCircleRadius]);

  const bufferRef = useUpdate(
    (geometry) => {
      geometry.setFromPoints(vertices);
    },
    [vertices],
  );

  return (
    <line>
      <lineBasicMaterial color='black' />
      <bufferGeometry ref={bufferRef} />
    </line>
  );
};

export default Triangles;
