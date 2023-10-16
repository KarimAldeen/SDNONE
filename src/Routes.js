import React, { Suspense } from "react";
import { lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";

export default function AppRoutes() {


return(

    <Router>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            

        </Routes>
    </Router>

 );
}