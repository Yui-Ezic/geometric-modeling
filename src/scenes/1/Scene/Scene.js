import React from "react";
import { Grid, GridCameraControls } from "../../../components";
import { BaseSquare, CornerCircles } from "."

export const Controls = () => (
    <>
        <GridCameraControls />
        <Grid />
    </>
);

export const Figure = ({ ...props }) => (
    <group {...props}>
        <BaseSquare />
        <CornerCircles />
    </group>
)

const Scene = () => (
    <>
        <Controls />
        <Figure />
    </>
);

export default Scene;