import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div id="wrap">
            <Header/>
            <div id="contentWrap">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;