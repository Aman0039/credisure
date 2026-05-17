import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LazyLoading from '../components/LazyLoading';
import LoginSignup from '../pages/LoginSignup';

const LandingPage = lazy(() => import('../pages/LandingPage'));

const NotFound = () => (
    <div className="flex items-center justify-center h-screen">
        <h1>404 - Page Not Found</h1>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<LazyLoading />}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element = {<LoginSignup/>}/>

                {/* Catch all unknown routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;