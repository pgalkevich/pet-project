import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/route-config/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Routes>
                {Object.values(routeConfig)
                    .map(({element, path}) => (
                        <Route path={path} element={element} />
                    ))}
            </Routes>
        </Suspense>
    );
};
