import React from "react";
import { Grid, GridCameraControls } from "../../../components";

export const Controls = () => (
    <>
        <GridCameraControls />
        <Grid />
    </>
);

const Scene = () => (
    <>
        <Controls />
    </>
);

export default Scene;