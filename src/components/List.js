import React, { Component } from "react";

class Lists extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "John Doe",
                Place: "Delhi",
            },
            {
                id: 2,
                name: "Amal Gopal",
                Place: "Uttar Pradesh",
            },
        ],
    };
    render() {
        return (
            <div>
                <ul>List Component</ul>
                {this.state.data.map((value, index) => {
                    return (
                        <li key={value.id}>
                            {/* or we can use key={data} becoz its unique,we should pass unique id to key because of virtual dom */}
                            {value.id}-{value.name}-{value.Place}
                        </li>
                    );
                })}
            </div>
        );
    }
}
export default Lists;
