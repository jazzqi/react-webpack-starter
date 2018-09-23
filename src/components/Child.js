import React from "react";

export default class Child extends React.Component {
  render() {
    console.log('Common Component Render')

    return <div>Value In Common Component: {this.props.obj.value}</div>;
  }
}
