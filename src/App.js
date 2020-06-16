import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CardContainer />
      </div>
    );
  }
}

export default App;
