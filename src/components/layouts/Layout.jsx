import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const headerWhite = ["/pub/Notice", "/pub/Question"];

function Layout({ children }) {
    const location = useLocation().pathname;

    return (
        <div id="wrap" className={headerWhite.includes(location) ? "sub" : "home transTop"}>
            <Header/>
            <div id="contentWrap">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;