import * as React from "react";

import { useField } from "scripts";
import { Grid, GridCameraControls } from "components";
import { Curve } from "./Curve";
import { prefix } from "..";

export const Controls = () => (
  <>
    <Grid />
    <GridCameraControls />
  </>
);

export const Figure = () => {
  const [iterations] = useField(`${prefix}iterations`);
  const [showVolume] = useField(`${prefix}show-volume`);
  const [showColor] = useField(`${prefix}show-color`);

  const [lineLength] = useField(`${prefix}length`);
  const [startX] = useField(`${prefix}start-x`);
  const [startY] = useField(`${prefix}start-y`);
  const [rotation] = useField(`${prefix}rotation`);

  return (
    <Curve
      depth={iterations}
      lineWidth={2}
      lineLength={lineLength}
      startX={startX}
      startY={startY}
      rotation={rotation}
      showVolume={showVolume}
      showColor={showColor}
    />
  );
};

const Scene = () => (
  <>
    <Controls />
    <Figure />
  </>
);

export default Scene;
