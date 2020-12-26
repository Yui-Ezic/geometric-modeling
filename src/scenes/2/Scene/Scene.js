import React from "react";
import { Grid, GridCameraControls } from "../../../components";
import {BaseSquare, CentralCircles, CornerCircles, Triangles } from "."

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
        <CentralCircles />
        <Triangles />
    </group>
)

const Scene = () => (
    <>
        <Controls />
        <Figure />
    </>
);

export default Scene;