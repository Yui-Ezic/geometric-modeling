import React from "react";

import { useField } from "../../../scripts";
import { Circle } from "../../../components";

import { prefix } from "..";

const CornerCircles = () => {
  const [N] = useField(`${prefix}squareSideSize`);
  const [cornerCircleRadius] = useField(`${prefix}cornerCircleRadius`);

  const spaceFromCenter = React.useMemo(() => (Math.sqrt(2) * N) / 2 - cornerCircleRadius, [
    N,
    cornerCircleRadius,
  ]);

  return (
    <>
      <Circle
        radius={cornerCircleRadius}
        shift={[spaceFromCenter, 0]}
        startAngle={0}
        endAngle={180}
        color="black"
      />
      <Circle
        radius={cornerCircleRadius}
        shift={[0, spaceFromCenter]}
        startAngle={270}
        endAngle={90}
        color="black"
      />
      <Circle
        radius={cornerCircleRadius}
        shift={[-spaceFromCenter, 0]}
        startAngle={180}
        endAngle={0}
        color="black"
      />
      <Circle
        radius={cornerCircleRadius}
        shift={[0, -spaceFromCenter]}
        startAngle={90}
        endAngle={270}
        color="black"
      />
    </>
  );
};

export default CornerCircles;
