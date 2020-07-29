import React from 'react'
import "../../index.css"

function AddItem(props) {

    function submitItem() {
        var title = document.getElementById("expensetitle").value;
        var amount = document.getElementById("expenseamount").value;
        if (title === "") {
            alert("Enter Expense name");
            return;
        }
        if (amount === "" || amount === 0) {
            alert("Enter Amount");
            return;
        }
        console.log(title, amount);
        props["updateFunction"]({ "title": title, "amount": amount });
        props["toggleFunction"]()
    }

    return (

        <div className="addItem"        >
            <div className="addItemChild">
                <div style={{ display: "flex", alignItems: "Center" }}>
                    <div style={{ color: "#466", fontSize: "17px", flex: 1 }}>
                        Add New Expense
                    </div>
                    <div onClick={props["toggleFunction"]} style={{ float: "right", fontSize: "30px", color: "#f00" }}>
                        X
                        </div>
                </div>
                <hr style={{ borderTop: "1px solid #ccc" }} />
                <br />

                <div className="formItem">
                    Expense Title :
                     <input id="expensetitle" type="text" className="inputfield" autoComplete="off" />
                </div>
                <div className="formItem">
                    Amount (₹) :
                 <input id="expenseamount" type="number" className="inputfield" />
                </div>
                <br /><br />
                <div onClick={submitItem} className="addNewButton">
                    Add
                        </div>
            </div>
        </div>
    )
}

export default AddItem
