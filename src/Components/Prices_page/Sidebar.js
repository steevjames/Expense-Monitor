import React, { Component } from 'react'
import "../../index.css";
import AddItem from './AddItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            checked: false
        })
    };

    toggleAdd() {
        this.setState({ checked: !this.state.checked });
    }

    render() {

        let expense = this.props.data;
        let sum = 0;
        for (let i in expense
        ) {
            sum = sum + Number(expense[i]["desc"])
        }
        return (
            <div className="leftpanel">
                <div style={{
                    margin: "0% 10% 20px 10%", padding: "10px", borderBottom: "1px solid #999", fontSize: "20px"
                }}>
                    Total expenditure:
                    <div class="expenseText">
                        ₹ {sum}
                    </div>
                </div>

                <div className="addNewButton" onClick={() => this.toggleAdd()}                >
                    Add New Item
                </div>
                {this.state.checked && <AddItem toggleFunction={this.toggleAdd.bind(this)} updateFunction={this.props.updateFunction} />}
            </div>
        )
    }
}

export default Sidebar
