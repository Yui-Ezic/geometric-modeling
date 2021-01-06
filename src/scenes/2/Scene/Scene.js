import React from "react";

import { useField, degToRad } from "scripts";

import { useUpdate } from "react-three-fiber";

import { Grid, GridCameraControls } from "components";
import { Figure as SceneFigure } from "scenes/1/Scene/Scene";
import { RotateFigureAroundPoint, RotationPoint } from ".";
import { prefix } from "..";

export const Figure = () => {
    const [scale] = useField(`${prefix}scale`);
    const [valueX] = useField(`${prefix}x-position`);
    const [valueY] = useField(`${prefix}y-position`);

    const [rotation] = useField(`${prefix}z-rotation`);

    // Optional props
    const [showAdvanced] = useField(`${prefix}show-advanced`);

    const [valueZ] = useField(`${prefix}z-position`);
    const [rotationX] = useField(`${prefix}x-rotation`);
    const [rotationY] = useField(`${prefix}y-rotation`);

    const groupRef = useUpdate(
        (geometry) => {
            geometry.scale.x = scale;
            geometry.scale.y = scale;
            geometry.scale.z = scale;

            geometry.position.x = valueX;
            geometry.position.y = valueY;
            geometry.rotation.z = degToRad(rotation);

            if (showAdvanced) {
                geometry.position.z = valueZ;
                geometry.rotation.x = degToRad(rotationX);
                geometry.rotation.y = degToRad(rotationY);
            } else {
                geometry.position.z = 0;
                geometry.rotation.x = 0;
                geometry.rotation.y = 0;
            }
        },
            [scale, valueX, valueY, rotation, showAdvanced, valueZ, rotationX, rotationY],
    );

    return (
        <group ref={groupRef} name="2RotationSceneFigure">
            <SceneFigure />
        </group>
    );
};

export const Scene = () => (
    <>
        <GridCameraControls />
        <Grid />
        <Figure />
        <RotationPoint />
        <RotateFigureAroundPoint />
    </>
);
