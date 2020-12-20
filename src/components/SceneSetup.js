import * as React from "react";
import { withRouter, Redirect } from "react-router-dom";

import { Main } from ".";
import { scenes } from "../scenes";

export const SceneSetup = withRouter(({ location: { pathname } }) => {
    const scene = React.useMemo(() => scenes[pathname], [pathname]);

    if (!scene) return <Redirect to={String(Object.entries(scenes)[0][0])} />;

    return (
        <>
            <Main>{scene?.scene}</Main>
        </>
    );
});