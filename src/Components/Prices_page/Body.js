import React, { Component } from 'react'
import "../../index.css";
import AddItem from './AddItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class Body extends Component {

    constructor(props) {
        super(props);
        this.abc = [{
            "title": "First card",
            "Desc": "This will describe the card here"
        }, {
            "title": "Last card",
            "Desc": "Alice in wonderland"
        }];
    }

    render() {
        console.log(this.abc);
        return (
            <div className="body">
                <div className="mainarea">
                    {this.abc.map(function (value) { return <>{value.title} <br /></> })}
                    <Router>
                        <Route exact path={"/add"} component={AddItem}></Route>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Body
