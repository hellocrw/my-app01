import React from 'react';
// import { render } from 'react-dom';
import './App.css';
import Father from './pages/Father';
import User from './pages/users/users';
import Func from './pages/func/func';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Jsx from './pages/jsx/jsx';
import Comp from './pages/comp/comp'

class App extends React.Component{
  
  render(){
    return (
      <Router>
        <h1>APP</h1>
        <hr></hr>
        <User></User>        
        <hr></hr>
        <Father></Father>
        <hr></hr>
        <Func></Func>
        <ul>
          <li>
            <Link to="/user">user</Link>
            <hr></hr>
              <Route path="/user" exact component={User}></Route>
          </li>
        </ul>

        <Jsx></Jsx>
        <Comp attr="父类的属性值"></Comp>
      </Router>
    )
  }
}

export default App;
