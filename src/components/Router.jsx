import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export default function Router() {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}