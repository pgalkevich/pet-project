import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/routeConfig';
import { Loader } from 'shared/ui/Loader';

export const  AppRouter = () => {
    return (
        <Suspense fallback={<Loader isSimple={false}/>} >
            <Routes>
                {Object.values(routeConfig)
                    .map(({ element, path }, index) => (
                        <Route
                            path={path}
                            element={
                                <div className='page-content'>{element}</div>
                            }
                            key={index}
                        />
                    ))}
            </Routes>
        </Suspense>
    );
};
