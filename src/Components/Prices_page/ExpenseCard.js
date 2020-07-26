import React from 'react'
import "./../../index.css"
import deleteIcon from "./delete.png"

function ExpenseCard(props) {
    return (

        <div className="expenseCard">
            {/* Delete Icon */}
            <div style={{ float: "right" }}>
                <img src={deleteIcon} class="deleteIcon" alt="Delete"  onClick={alert}/>
            </div>
            {/* Card main area */}
            <div style={{ width: "100%" }}>
                {props.title}
                <hr style={{ borderTop: "1px solid #ccc" }} />
                {props.description} Rs
            </div>

        </div>
    )
}

export default ExpenseCard
