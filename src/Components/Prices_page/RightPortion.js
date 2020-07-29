import React from 'react'
import "../../index.css";
import ExpenseCard from './ExpenseCard';


function RightPortion(props) {
    let expenses = props.expenses
    return (
        <div className="rightPortion" >
            <div className="mainarea">
                {expenses.map(value => <ExpenseCard title={value.title} description={value.desc} key={value.id}
                    id={value.id} deleteFunction={props.deleteFunction} />)}
                {expenses.length === 0 ?
                    <div style={{
                        fontSize: "20px", padding: "20px", color: "#444", animation:"fadein 2s",
                        marginLeft: "30%", marginTop: "10%", transform: "translate(-30%,-10%)"
                    }}>
                        No items found
                     </div> : ""}
            </div>
        </div>
    )
}

export default RightPortion
