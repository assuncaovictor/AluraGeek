import React from "react";
import Body from "../../components/Body";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import routes from "./routes/index";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            {routes.map(({ path: { route }, element }) => (
                <Route path={route} key={route} element={<Body>{element}</Body>} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
