import React from "react";
import NavbarHome from "./NavbarHome";
import Carousel from "./Carousel";
import WebPackage from "./WebPackage";
import CounterUpPage from "./CounterUpPage";
import Footer from "./Footer";


function HomePage() {
    return(
        <>
            <NavbarHome/>
            <Carousel />
            <WebPackage />
            <CounterUpPage />
            <Footer />
        </>
    )
}

export default HomePage;