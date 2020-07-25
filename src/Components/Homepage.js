import React from 'react'
import Sidebar from './Sidebar';
import Body from "./Prices_page/Body";
import Navbar from "./Navbar";
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Body />
            <Footer />
        </div>
    )
}

export default Homepage
