import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    // Constructor 是唯一初始化 state 的地方
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
}
