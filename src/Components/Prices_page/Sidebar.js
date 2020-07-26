import React, { Component } from 'react'
import "../../index.css";
import { Link } from 'react-router-dom';
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
        console.log(this.state.checked);
        return (
            <div className="leftpanel">
                Coming Soon
                <br />
                <div style={{ height: "200px" }}>.</div>
                {/* <Link to={{ pathname: '/add' }} style={{ textDecoration: 'none' }}> */}
                <div style={{
                    backgroundColor: "#446", color: "#fff", border: "0", padding: "10px 20px",
                    borderRadius: "50px", width: "200px", margin: "auto"
                }}
                    onClick={()=>this.toggleAdd()}
                    // onClick={() => this.props.updateFunction({ "title": "ha ha ha", "desc": "Guns", "id": 4 })}
                >
                    Add New Item
                </div>
                {/* </Link> */}
                {this.state.checked && <AddItem toggleFunction={this.toggleAdd.bind(this)} updateFunction={this.props.updateFunction} />}
            </div>
        )
    }
}


export default Sidebar
