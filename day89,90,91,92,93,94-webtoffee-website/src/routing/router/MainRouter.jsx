import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "../../screens/SharedLayout.jsx";
import Home from "../../screens/Home.jsx";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
