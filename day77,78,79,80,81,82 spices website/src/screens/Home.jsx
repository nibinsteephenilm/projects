import React, { useEffect } from "react";
import Spotlight from "../components/home/Spotlight";
import WholeSale from "../components/home/WholeSale";
import Welcome from "../components/home/Welcome";
import Mission from "../components/home/Mission";
import Products from "../components/home/Products";
import Listen from "../components/home/Listen";
import Footer from "../components/home/Footer";

const Home = () => {
    return (
        <div>
            <Spotlight/>
            <WholeSale/>
            <Welcome/>
            <Mission/>
            <Products/>
            <Listen/>
            <Footer/>
        </div>
    );
};

export default Home;
