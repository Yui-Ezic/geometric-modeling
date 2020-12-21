import * as React from "react";
import styled from "@emotion/styled";
import { Canvas, extend } from "react-three-fiber";

import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

const Workspace = styled.main`
  background-color: #e9ecf1;
  overflow: hidden;
  width: 100%;
`;


export const Main = ({ children }) => {
    return (
        <Workspace>
            <Canvas colorManagement>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {children}
            </Canvas>
        </Workspace>
    );
};