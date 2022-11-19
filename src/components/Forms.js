import React, { Component } from "react";

class Forms extends Component {
    state = {
        inputValue: "",
        inputValueTwo: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClick = () => {
        console.log(this.state.inputValue);
        console.log(this.state.inputValueTwo);
    };

    render() {
        return (
            <form>
                <h2>Form Component</h2>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    name="inputValue"
                    id=""
                />

                {/* Adding Two Inputbox */}

                {/* adding name attribute to use the function once */}

                <input
                    type="text"
                    value={this.state.inputValueTwo}
                    onChange={this.handleChange}
                    name="inputValueTwo"
                    id=""
                />

                <button type="button" onClick={this.handleClick}>
                    Submit
                </button>
            </form>
        );
    }
}
export default Forms;
