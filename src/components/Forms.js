import React, { Component } from "react";

class Forms extends Component {
    state = {
        inputValue: "",
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    };

    handleClick = () => {
        console.log(this.state.inputValue);
    };

    render() {
        return (
            <form>
                <h2>Form Component</h2>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    name="form"
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
