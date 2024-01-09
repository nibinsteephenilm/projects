import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import Products from "../../screens/Products";
import SharedLayout from "../../screens/SharedLayout";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;
