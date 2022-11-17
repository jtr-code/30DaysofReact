import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                </nav>
            </div>
        );
    }
}
export default Navbar;
