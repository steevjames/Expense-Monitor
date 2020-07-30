import React from 'react'
import "../../index.css";
import ExpenseCard from './ExpenseCard';


function RightPortion(props) {
    let expenses = props.expenses
    console.log(expenses)
    return (
        <div className="rightPortion" >
            <div className="mainarea">
                {expenses.map(value => <ExpenseCard title={value.title} amount={value.amount} key={value.id}
                    id={value.id} deleteFunction={props.deleteFunction} />)}
                {expenses.length === 0 ?
                    <div className="noItemsFound">
                        No items found
                     </div> : ""}
            </div>
        </div>
    )
}

export default RightPortion
