import React from "react";

import { useField } from "../../../scripts";
import { Circle } from "../../../components";

import { prefix } from "..";

const CentralCircles = () => {
  const [innerCircleRadius] = useField(`${prefix}innerCircleRadius`);
  const [outterCircleRadius] = useField(`${prefix}outterCircleRadius`);

  return (
    <>
      <Circle radius={innerCircleRadius} />
      <Circle radius={outterCircleRadius} />
    </>
  );
};

export default CentralCircles;
