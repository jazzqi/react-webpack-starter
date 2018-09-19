import React, { Component } from "react";
import Counter from "./Counter";

// React let us define components as classes or as functions.

// 生命周期分为四个类型：
// 1. mounting
// 2. updating
// 3. error boundaries
// 4. unmounting
class App extends Component {
  // or extends React.components
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 60,
      showErrorComponent: false
    };

    this.mountCounter = () => {
      this.setState({ mount: true });
    };
    this.unmountCounter = () => {
      this.setState({ mount: false });
    };

    this.ignoreProp = () => {
      this.setState({ ignoreProp: Math.random() });
    };

    this.seedGenerator = () => {
      this.setState({
        seed: Number.parseInt(Math.random() * 100)
      });
    };

    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.showErrorComponent });
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
