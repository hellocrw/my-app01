import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends Component {
  render() {
    return (
      <div>
        <h1>clock</h1>
      </div>
    )
  }
}

// TODO
ReactDOM.render(
  <Clock/> , document.getElementById('root')
)