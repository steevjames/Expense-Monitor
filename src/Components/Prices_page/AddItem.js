import React from 'react'
import { useHistory } from "react-router-dom";

function AddItem() {
    return (
        <div className="addItem" onClick={useHistory().goBack}>
            <div class="addItemChild" onClick={{}}>Add new spend
            <br/>
            <input/>
            <input/>
            <button>Add</button>
            </div>
        </div>
    )
}

export default AddItem
