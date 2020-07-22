import React from 'react';
import './App.css';
import Father from './pages/Father';
import User from './pages/users/users';
import Func from './pages/func/func';

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>APP</h1>
        <hr></hr>
        <User></User>        
        <hr></hr>
        <Father></Father>
        <hr></hr>
        <Func></Func>
      </div>
    )
  }
}

export default App;
