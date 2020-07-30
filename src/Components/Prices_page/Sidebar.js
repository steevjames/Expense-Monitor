import React, { Component } from 'react'
import "../../index.css";
import AddItem from './AddItem';
import CustomCalendar from './Calendar/calendar';

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
        let date = this.props.date
        this.day = (date.getDate() + 1).toString().padStart(2, "0")
        this.month = (date.getMonth() + 1).toString().padStart(2, "0");
        this.year = date.getFullYear();
        let todaySum = 0;
        let monthSum = 0;
        for (let i in expense[this.year][this.month][this.day]) {
            todaySum = todaySum + Number(expense[this.year][this.month][this.day][i]["amount"])
        }
        for (let i in expense[this.year][this.month]) {
            for (let j in expense[this.year][this.month][i]) {
                console.log(expense[this.year][this.month][i][j], "is it")
                monthSum += Number(expense[this.year][this.month][i][j]["amount"])
            }
        }
        return (
            <div className="leftpanel">
                <CustomCalendar changeDate={this.props.changeDate} />
                <div className="sidebarLower">
                    Month Total:
                    <div className="expenseText">
                        ₹ {monthSum}
                    </div>

                    Todays total:
                    <div className="expenseText">
                        ₹ {todaySum}
                    </div>
                </div>

                <div className="addNewButton" onClick={() => this.toggleAdd()}                >
                    Add Expense
                </div>
                {this.state.checked && <AddItem toggleFunction={this.toggleAdd.bind(this)} updateFunction={this.props.updateFunction} />}
            </div>
        )
    }
}

export default Sidebar
