import React, { Component } from 'react'
import Sidebar from './Sidebar';
import RightPortion from "./RightPortion";
import Header from "../Header";
import Footer from '../Footer';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.data = JSON.parse(localStorage.getItem("expenses"));
        this.data = this.data ?? {}
        this.date = new Date()
        this.day = (this.date.getDate() + 1).toString().padStart(2, "0")
        this.month = (this.date.getMonth() + 1).toString().padStart(2, "0");
        this.year = this.date.getFullYear();
        this.data[this.year] = this.data[this.year] ?? {}
        this.data[this.year][this.month] = this.data[this.year][this.month] ?? {}
        this.data[this.year][this.month][this.day] = this.data[this.year][this.month][this.day] ?? []
        this.state =
        {
            expenses: this.data[this.year][this.month][this.day]
        };
    }

    changeDate(date) {
        this.date=date;
        this.day = (date.getDate() + 1).toString().padStart(2, "0")
        this.month = (date.getMonth() + 1).toString().padStart(2, "0");
        this.year = date.getFullYear();
        this.data[this.year] = this.data[this.year] ?? {}
        this.data[this.year][this.month] = this.data[this.year][this.month] ?? {}
        this.data[this.year][this.month][this.day] = this.data[this.year][this.month][this.day] ?? []
        this.setState({
            expenses: this.data[this.year][this.month][this.day]
        })
    }


    updateFunction(inputData) {
        inputData["id"] = Math.floor((Math.random() * 1000) + 1);
        let temp = this.data
        temp[this.year][this.month][this.day] = this.state.expenses.concat(inputData);
        this.setState({
            expenses: temp[this.year][this.month][this.day]
        });
        localStorage.setItem("expenses", JSON.stringify(temp));
    }

    deleteFunction(id) {
        let temp = this.state.expenses;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i]["id"] === id) temp.splice(i, 1);

        }
        this.setState({
            expenses: temp
        });
        localStorage.setItem("expenses", JSON.stringify(temp));
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
                <Header />
                <div className="pageBody">
                    {/* <button onClick={() => this.changeDate(new Date('July 25, 2020 23:15:30'))}></button> */}
                    <Sidebar data={this.data} date={this.date} updateFunction={this.updateFunction.bind(this)} changeDate={this.changeDate.bind(this)}/>
                    <RightPortion expenses={this.state.expenses} deleteFunction={this.deleteFunction.bind(this)} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage


