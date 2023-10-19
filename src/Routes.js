import React, { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./sections/Main/MainSection";
import i18n from '../src/translate/Translate'


export default function AppRoutes() {


return(

    <Router>
        <Routes>
            <Route path="/*" element={<MainPage/>} />
        </Routes>
    </Router>

 );
}