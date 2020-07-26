import React, { Component } from 'react'
import "../../index.css";
import AddItem from './AddItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';

export class Body extends Component {
    constructor(props) {
        super(props);
        console.log("");
    }

    render() {
        this.data = this.props.data;

        return (
            <div className="body" >
                <div className="mainarea">
                    {this.data.map(value => <ExpenseCard title={value.title} description={value.desc} key={value.id} />)}
                    <Router>
                        <Route exact path={"/add"} component={AddItem}></Route>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Body
