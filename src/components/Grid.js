import React from "react";

import * as THREE from "three";

const position = new THREE.Vector3(0, 0, 0);

export const Grid = React.memo(
    ({ rotation = [Math.PI / 2, 0, 0], position = new THREE.Vector3(0, 0, 0) }) => (
  <gridHelper
    args={[1000, 1000, "rgb(89,123,160)", "rgb(184, 184, 187)"]}
    position={position}
    rotation={rotation}
  />
));
