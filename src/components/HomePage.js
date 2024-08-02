import React from "react";
import NavbarHome from "./NavbarHome";
import Carousel from "./Carousel";
import WebPackage from "./WebPackage";
import CounterUpPage from "./CounterUpPage";

function HomePage() {
    return(
        <>
            <NavbarHome/>
            <Carousel />
            <WebPackage />
            <CounterUpPage />
        </>
    )
}

export default HomePage;