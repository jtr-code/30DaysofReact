import React, { Component } from "react";

class Event extends Component {
    state = {
        counter: 0,
    };

    OnIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
       })
    };

    OnDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
       })
    };
    render() {
        return (
            <div>
                <h2>Event Component</h2>
                <h3>Counter: {this.state.counter}</h3>
                <button type="button" onClick={this.OnIncrement}> + </button>
                <button type="button" onClick={this.OnDecrement}> - </button>
            </div>
        );
    }
}
export default Event;
