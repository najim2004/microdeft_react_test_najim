import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy load components for better performance
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

// Loading fallback component
const LoadingFallback = () => <div className="loading-spinner">Loading...</div>;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
