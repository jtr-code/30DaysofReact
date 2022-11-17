import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
    state = {
        sayMyName: "Jishnu t raj",
        sayMyAddress: "kerala",
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
