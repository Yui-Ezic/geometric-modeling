import * as React from "react";

import { useField } from "scripts";
import { GridCameraControls } from "components";
import { prefix } from "..";
import { Figure as SceneFigure } from "./Figure";
import { RenderSide } from "./RenderSide";
import { ProjectionWrapper } from "./ProjectionWrapper";

export const Controls = () => (
  <>
    <RenderSide rotation={[0, 0, 0]} planeRotation={[90, 0, 0]} planePosition={[-0.1, 0, -0.1]} />
    <RenderSide
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
      planeRotation={[0, 90, 0]}
      planePosition={[-0.1, 0, -0.1]}
    />
    <RenderSide
      rotation={[Math.PI / 2, Math.PI / 2, 0]}
      planeRotation={[0, 0, 90]}
      planePosition={[-0.1, 0, -0.1]}
    />

    <GridCameraControls
      maxAzimuthAngle={Math.PI / 2.1}
      minAzimuthAngle={0}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={Math.PI / 10}
    />
  </>
);

export const Figure = () => {
  const [posX] = useField(`${prefix}pos-x`);
  const [posY] = useField(`${prefix}pos-y`);
  const [posZ] = useField(`${prefix}pos-z`);
  const [useTexture] = useField(`${prefix}use-texture`);
  const [radiusTop] = useField(`${prefix}radius-top`);
  const [radiusBottom] = useField(`${prefix}radius-bottom`);
  const [height] = useField(`${prefix}height`);
  const [offsetX] = useField(`${prefix}offset-x`);
  const [offsetY] = useField(`${prefix}offset-y`);
  const [rotate] = useField(`${prefix}use-rotate`);

  return (
    <>
      <ProjectionWrapper positionX={0.01} positionY={posY} positionZ={posZ} scaleX={0.0001}>
          <SceneFigure radiusTop={radiusTop} radiusBottom={radiusBottom} height={height} rotate={rotate}/>
      </ProjectionWrapper>
      <ProjectionWrapper positionX={posX} positionY={0.01} positionZ={posZ} scaleY={0.0001}>
          <SceneFigure radiusTop={radiusTop} radiusBottom={radiusBottom} height={height} rotate={rotate}/>
      </ProjectionWrapper>
      <ProjectionWrapper positionX={posX} positionY={posY} positionZ={0.01} scaleZ={0.0001}>
          <SceneFigure radiusTop={radiusTop} radiusBottom={radiusBottom} height={height} rotate={rotate}/>
      </ProjectionWrapper>

      <SceneFigure positionX={posX} positionY={posY} positionZ={posZ} useTexture={useTexture}
                   radiusTop={radiusTop} radiusBottom={radiusBottom} height={height} rotate={rotate}
                   offsetX={offsetX} offsetY={offsetY}
      />
    </>
  );
};

const Scene = () => (
  <>
    <Controls />
    <Figure />
  </>
);

export default Scene;
