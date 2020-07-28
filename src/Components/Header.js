import React from 'react';
import logo from "../logo.png";
import "../index.css";

function Header() {
    return (
        <div className="header">
            <img src={logo} style={{ width: "30px", verticalAlign: "middle", marginRight: "10px" }} alt="" />
             Expense Tracker
        </div>
    )
}

export default Header
