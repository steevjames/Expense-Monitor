import React from 'react'
import "../../index.css";
import ExpenseCard from './ExpenseCard';


function Body(props) {
    let expenses = props.expenses
    return (
        <div className="body" >
            <div className="mainarea">
                {expenses.map(value => <ExpenseCard title={value.title} description={value.desc} key={value.id} />)}
                {expenses.length==0? "No items found":""}
            </div>
        </div>
    )
}

export default Body
