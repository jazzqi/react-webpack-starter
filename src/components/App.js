import React, {Component} from 'react';
import Counter from './Counter'

// React let us define components as classes or as functions.

// 生命周期分为四个类型：
// 1. mounting
// 2. updating
// 3. error boundaries
// 4. unmounting
class App extends Component { // or extends React.components
  render() {
    return <div>
      <Counter></Counter>
    </div>
  }
}

export default App;