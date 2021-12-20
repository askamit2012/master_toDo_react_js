import React, { Component } from "react";
import "../App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  minusHandler() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  plusHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    // let count = this.props.count;
    return (
      <div>
        <h4>Let's Counter!</h4>
        <button onClick={() => this.minusHandler()}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.plusHandler()}>+</button>
      </div>
    );
  }
}

export default Counter;
