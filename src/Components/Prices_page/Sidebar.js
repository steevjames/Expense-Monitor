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
        const abcc = {
            backgroundColor: "#446", color: "#fff", border: "0", padding: "10px 20px",
            borderRadius: "50px", width: "200px", margin: "auto"
        }
        return (
            <div className="leftpanel">
                <div style={{ height: "200px" }}> </div>
                <div className="addNewButton" style={abcc} onClick={() => this.toggleAdd()}                >
                    Add New Item
                </div>
                {this.state.checked && <AddItem toggleFunction={this.toggleAdd.bind(this)} updateFunction={this.props.updateFunction} />}
            </div>
        )
    }
}

export default Sidebar
