import React from 'react';
import logo from "../logo.png";
import "../index.css";

function Navbar() {
    return (
        <div className="nav">
            <img src={logo} style={{ width: "30px", verticalAlign: "middle", marginRight: "10px" }} alt="" />
             Price Tracker
        </div>
    )
}

export default Navbar
