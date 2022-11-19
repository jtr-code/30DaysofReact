import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Event from "./components/Event";
import Forms from "./components/Forms";
import Lists from "./components/List";

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
                <Event />
                <Forms/>
                <Lists/>
                <Footer />
            </div>
        );
    }
}

export default App;
