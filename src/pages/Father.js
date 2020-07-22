import React from 'react';
import styles from './Father.css';
import Child from './Child';

class Father extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Father",
      childMsg: '',
    }
  }

  // 获取子组件的值
  getChildMsg (msg) {
    this.setState({
      childMsg: msg,
    })
  }


  render(){
    return (
      <div>
        <h1 className={styles.title}>Page Father</h1>
        <p>{this.state.childMsg}</p>
        <hr></hr>
        {/* 1.父组件-> 子组件, 发送: name={this.state.name} */}
        {/* 1. 子组件 -> 父组件, 将整个对象发射给子组件 parent ={this} */}
        <Child name={this.state.name} parent={this} ></Child>
      </div>
    )
  }
}
export default Father;
