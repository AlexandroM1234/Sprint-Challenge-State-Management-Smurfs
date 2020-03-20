import React, { Component } from "react";
import "./App.css";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs with context api</h1>
        <SmurfsForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
