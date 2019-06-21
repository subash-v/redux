import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Store,{INCREMENT,DECREMENT} from "./Store";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
increment=()=>{
  Store.dispatch({type:INCREMENT});
  console.log(Store.getState().count)
}
decrement=()=>{
  Store.dispatch({type:DECREMENT});
  console.log(Store.getState().count)
}
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <button onClick={this.increment}>
         INCREMENT
        </button>
        <button onClick={this.decrement}>
          DECREMENT
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
