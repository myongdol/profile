import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {Resume} from "../pages/Resume";
import {Home} from "../pages/Home";
import { useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Router() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/profile'
        element={() => {
          navigate('/resume', { replace: true });
          return null;
        }}
      />
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
}