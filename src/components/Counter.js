import React, { Component } from "react";
import Child from "./Child";
import PureChild from "./PureChild";

const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends Component {
  constructor(props) {
    // Constructor 是唯一初始化 state 的地方
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
      obj: {
        value: 0
      }
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });

    this.updateObj = () => {
      var temp = this.state.obj;
      temp.value = Math.random();
      this.setState({ obj: temp });
    };
  }

  // Called before anyother methods
  // The purpose of this method is to
  // give you a chance to copy any values
  // from props that you may be interested in
  // transferring over to state
  // COPY props INTO state
  // 静态方法，无法访问实例本身
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      };
    }

    return null;
    // any thing rather than null returned here will be the state
  }

  componentDidMount() {
    console.log("Component Did Mount");
    setTimeout(() => {
      this.setState({
        initializing: false
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    } else {
      console.log("Should Component Update - RENDER");
      return true;
    }
  }

  render() {
    console.log("Render");

    if (this.state.initializing) {
      return <div>Initializing</div>;
    }

    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error! {this.state.error}</div>;
    }

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}

        <button onClick={this.updateObj}>
          Update Obj In PureComponent
        </button>

        <Child obj={this.state.obj}/>
        <PureChild obj={this.state.obj}
          /**
            * Send anonymous new function or object will trigger PureComponent's renderring
            * each render will always generate new instance
            */
          // func={()=>{}}
          // object={{}}
        />
      </div>
    );
  }

  // Capture some properties that are not stored
  // in the state before we rerender that component
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    return null;
    // 这里返回的对象，将是 componentWillMount() 的第三个参数
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("-------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Umount");
    console.log("-------------------");
  }

  // if not catch error, the app will crash
  componentDidCatch(error, info) {
    console.log("Component Did Catch", error, info);

    this.setState({
      error,
      info
    });
  }
}
