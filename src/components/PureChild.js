import React from "react";

class PureChild extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // Pure Component should be render only once, if the props and state don't change
    // Use shallow compare
    console.log('PureComponent Render')

    return <div>
      Value in Pure Component: {this.props.obj.value}
    </div>
  }
}

export default PureChild;
