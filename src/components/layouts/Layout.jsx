import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const headerWhite = ["/"];

function Layout({ children }) {
    const location = useLocation().pathname;

    return (
        <div id="wrap" className={headerWhite.includes(location) ? "home transTop" : "sub"}>
            <Header/>
            <div id="contentWrap">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;