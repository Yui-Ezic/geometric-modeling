import * as React from "react";

import * as THREE from "three";
import { useUpdate } from "react-three-fiber";
import { degToRad } from "scripts";



const memoize = (fn) => {
  const cachedResults = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cachedResults[key]) {
      cachedResults[key] = fn(...args);
    }
    return cachedResults[key];
  };
};

const getTurtle = memoize((depth = 1) => {
  if (depth <= 0) {
    return "FXF";
  }

  const turtle = getTurtle(depth - 1);
  let newTurtle = "";

  [...turtle].forEach((char) => {
    if (char === "F") {
      newTurtle += "FXF";
    } else if (char === "X") {
      newTurtle += "+FXF-FXF-FXF+";
    } else {
      newTurtle += char;
    }
  });

  return newTurtle;
});

const convertCos = memoize(
  ({ lineLength = 1, direction = 0 }) => lineLength * Math.cos(direction * 0.017453292519),
);
const convertSin = memoize(
  ({ lineLength = 1, direction = 0 }) => lineLength * Math.sin(direction * 0.017453292519),
);

const getLine = memoize(
  ({
    turtle = "",
    rotation = 0,
    startX = 0,
    startY = 0,
    lineLength = 1,
    showVolume = false,
  } = {}) => {
    if (!turtle) return [];

    let direction = rotation;
    let x = startX;
    let y = startY;

    const dots = [new THREE.Vector3(x, y, 0)];

    [...turtle].forEach((char, i) => {
      // 'F', draw forward length in direction
      if (char === "F") {
        const xFix = convertCos({ lineLength, direction });
        const yFix = convertSin({ lineLength, direction });

        const endx = x + xFix;
        const endy = y + yFix;

        dots.push(new THREE.Vector3(endx, endy, showVolume ? i / 1000 : 0));

        x = endx;
        y = endy;
      }
      // '-' add 90 degrees to direction
      else if (char === "-") {
        direction += 60;
      }
      // '+' subtract 90 degrees from direction
      else if (char === "+") {
        direction -= 60;
      }
    });

    return dots;
  },
);

export const Curve = ({
  depth = 1,
  lineWidth = 2,
  lineLength: scale = 1,
  startX = 0,
  startY = 0,
  rotation = 0,
  showVolume = false,
}) => {
  const turtle = React.useMemo(() => getTurtle(depth) || null, [depth]);
  const lines = React.useMemo(() => getLine({ turtle, showVolume }), [
    turtle,
    showVolume,
  ]);

  const meshRef = useUpdate(
    (geometry) => {
      geometry.scale.x = scale;
      geometry.scale.y = scale;
      geometry.scale.z = scale;

      geometry.position.x = startX;
      geometry.position.y = startY;
      geometry.rotation.z = degToRad(rotation);
    },
    [scale, startX, startY, rotation],
  );

  const colors = React.useMemo(() => {
    const colors = [];

    for (let i = 0; i < lines.length; i++) {
      colors.push(0, 0, 0);
    }

    return colors;
  }, [lines.length]);

  const geometryRef = useUpdate(
    (geometry) => {
      geometry.setFromPoints(lines);
      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    },
    [lines, colors],
  );

  return (
    <mesh ref={meshRef}>
      <line>
        <lineBasicMaterial vertexColors linewidth={lineWidth} />
        <bufferGeometry ref={geometryRef} />
      </line>
    </mesh>
  );
};
