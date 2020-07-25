import React, { Component } from 'react'
import "../../index.css";
import AddItem from './AddItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';

export class Body extends Component {

    constructor(props) {
        super(props);
        this.abc = [{
            "title": "First card",
            "desc": "This will describe the card here",
            "id": 2
        }, {
            "title": "Last card",
            "desc": "Alice in wonderland",
            "id": 1
        }];
    }

    render() {
        console.log(this.abc);
        return (
            <div className="body">
                <div className="mainarea">
                    {this.abc.map(value => <ExpenseCard title={value.title} description={value.desc} />)}
                    <Router>
                        <Route exact path={"/add"} component={AddItem}></Route>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Body
