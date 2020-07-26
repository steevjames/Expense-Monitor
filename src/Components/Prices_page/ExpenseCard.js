import React from 'react'
import "./../../index.css"
import deleteIcon from "./delete.png"

function ExpenseCard(props) {
    return (

        <div className="expenseCard">
            {/* Delete Icon */}
            <div style={{ float: "right" }}>
                <img src={deleteIcon} style={{ width: "40px", marginLeft: "20px" }} alt="Delete" />
            </div>
            {/* Card main area */}
            <div style={{ width: "100%" }}>
                {props.title}
                <hr style={{ borderTop: "1px solid #ccc" }} />
                {props.description}
            </div>

        </div>
    )
}

export default ExpenseCard
