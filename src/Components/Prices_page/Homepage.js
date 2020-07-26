import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Body from "./Body";
import Navbar from "../Navbar";
import Footer from '../Footer';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            expenses: []
        };
    }

    updateFunction(data) {
        let temp = this.state.expenses.concat(data);
        this.setState({
            expenses: temp
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Sidebar data={this.state.expenses} updateFunction={this.updateFunction.bind(this)} />
                <Body expenses={this.state.expenses} />
                <Footer />
            </div>
        )
    }
}

export default Homepage


