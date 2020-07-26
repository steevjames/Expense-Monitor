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
            abc: []
        };
    }

    updateFunction(aaa) {
        let qqq = this.state.abc.concat(aaa);
        console.log(qqq);
        this.setState({
            abc: qqq
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Sidebar data={this.state.abc} updateFunction={this.updateFunction.bind(this)} />
                <Body data={this.state.abc} />
                <Footer />
            </div>
        )
    }
}

export default Homepage


