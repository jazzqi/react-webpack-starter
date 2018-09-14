import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));


// create redux reducers
const reducer = Redux.combineReducers({
  todos: (state = [], action) => {
    // use immutable.js
    const newState = Object.assign([], state);
    if (action.type == 'add') {
      newState.push(action.items)
    }
    // return ['grocerires', 'make dinner'];
    return newState;
  }
})

// use that reducer to create a store
const store = Redux.createStore(reducer);

const state = store.getState();

state.todos.forEach((s) => {
  console.log(s)
});

document.getElementById('submit-button').onclick = () => {
  store.dispatch({
    type: 'add', // type based on action
    item: document.getElementById('todo').value;
  });
  // render();
};