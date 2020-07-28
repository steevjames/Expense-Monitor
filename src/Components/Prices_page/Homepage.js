import React, { Component } from 'react'
import Sidebar from './Sidebar';
import RightPortion from "./RightPortion";
import Header from "../Header";
import Footer from '../Footer';


class Homepage extends Component {

    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem("expenses"));
        // data= data==null?[]:data
        console.log(data)
        this.state =
        {
            expenses: data
        };
    }


    updateFunction(data) {
        data["id"] = Math.floor((Math.random() * 1000) + 1);
        let temp = this.state.expenses.concat(data);
        this.setState({
            expenses: temp
        });
        localStorage.setItem("expenses", JSON.stringify(temp));
    }

    deleteFunction(id) {
        let temp = this.state.expenses;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i]["id"] == id) temp.splice(i, 1);

        }
        this.setState({
            expenses: temp
        });
        localStorage.setItem("expenses", JSON.stringify(temp));
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Header />
                <div className="body">
                    <Sidebar data={this.state.expenses} updateFunction={this.updateFunction.bind(this)} />
                    <RightPortion expenses={this.state.expenses} deleteFunction={this.deleteFunction.bind(this)} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage


