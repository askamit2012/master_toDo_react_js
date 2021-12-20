import React, { Component } from "react";
import "./App.css";
// import Counter from "./Counter/Counter";
import ToDo from "./CC/ToDo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
