import React from 'react';
import styles from './func.css';

class Func extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'func',
    }
  }

  fn(){
    console.log(this);
  }


  render(){
    return (
      <div>
        <h1 className={styles.title}>Page func/func</h1>
        <p></p>
        <button onClick={this.fn}>普通函数</button>
      </div>
    );
  }
}
export default Func;
