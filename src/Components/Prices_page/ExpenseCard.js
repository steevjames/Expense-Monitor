import React from 'react'
import "./../../index.css"
import deleteIcon from "./delete.png"

function ExpenseCard(props) {
    return (
        <div className="expenseCardContainer">
            <div className="expenseCard">

                <div className="expenseCardLeft">
                    ₹ {props.amount}
                </div>

                {/* Separating Line */}
                <div className="expenseCardSeparator"> </div>

                <div style={{ flex: "auto", marginLeft: "20px", fontSize: "17px" }}>
                    {props.title}
                </div>


                <img src={deleteIcon} className="deleteIcon" alt="Delete" onClick={() => { props["deleteFunction"](props.id) }} />

            </div>
        </div>
    )
}

export default ExpenseCard
