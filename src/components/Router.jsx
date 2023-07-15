import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {Resume} from "../pages/Resume";
import {Home} from "../pages/Home";
import { useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";



export function Router() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Navigate to='/resume' replace={true} />} />
        <Route
          path='/resume'
          element={
            <Suspense fallback={<>로딩 중</>}>
              <Resume />
            </Suspense>
          }
        />
      </Routes>
    );
};