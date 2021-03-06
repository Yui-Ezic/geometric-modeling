import * as React from "react";

import * as THREE from "three";
import { useUpdate } from "react-three-fiber";

export const Circle = ({
  radius = 1,
  shift = [0, 0],
  color = 0x000000,
  lineWidth = 1,
  useArc = false,
  startAngle = 0,
  endAngle = 360,
  z = 0,
}) => {
  const [x, y] = shift;
  let correctedEndAngle = endAngle;
  if (endAngle < startAngle) {
    correctedEndAngle += 360;
  }

  const circlePoints = React.useMemo(() => {
    // If 'useArc' is true, circle will be drawn using three.js built-in 'absarc' method
    if (useArc) {
      const path = new THREE.Path();

      path.moveTo(radius, 0);
      path.absarc(0, 0, radius, 0, 2 * Math.PI, false);
      path.closePath();

      return path.getPoints();
    }
    // Otherwise, circle will be drawn manually
    else {
      const points = [];

      for (let i = startAngle; i <= correctedEndAngle; i++) {
        points.push(
          new THREE.Vector3(
            Math.sin(i * (Math.PI / 180)) * radius + x,
            Math.cos(i * (Math.PI / 180)) * radius + y,
            z,
          ),
        );
      }

      return points;
    }
  }, [radius, x, y, z, startAngle, correctedEndAngle, useArc]);

  const circleRef = useUpdate(
    (geometry) => {
      geometry.setFromPoints(circlePoints);
    },
    [circlePoints],
  );

  return (
    <line>
      <lineBasicMaterial color={color} linewidth={lineWidth} />
      <bufferGeometry ref={circleRef} />
    </line>
  );
};
