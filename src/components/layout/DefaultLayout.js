import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

export default function DefaultLayout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}
