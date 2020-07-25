import React from 'react';
import "../index.css";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="leftpanel">
            Coming Soon
            <br />
            <div style={{ height: "200px" }}>.</div>
            <Link to={{ pathname: '/add' }} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: "#446", color: "#fff", border: "0", padding: "10px 20px", borderRadius: "50px", width: "200px", margin: "auto" }}>
                    Add New Item
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
