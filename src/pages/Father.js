import React from 'react';
import styles from './Father.css';
import Child from './Child';
import {PubSub} from 'pubsub-js';

class Father extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Father",
      childMsg: '',
      searchName: '',
    }
  }

  // 获取子组件的值
  getChildMsg (msg) {
    this.setState({
      childMsg: msg,
    })
  }

  // 3.订阅消息
  componentDidMount(){
  // 订阅消息（search）
  PubSub.subscribe('search', (msg, searchName) => {
    this.setState({
      searchName: searchName,
    })
  })
  }


  render(){
    return (
      <div>
        <h1 className={styles.title}>Page Father</h1>
        <p>订阅信息：{this.state.searchName}</p>
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
