import React from 'react';
import styles from './users.css';
import {PubSub} from 'pubsub-js';

class Users extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'users',
    }
  }

  /**
   * 1. ref = 'content'  -->  this.refs.content 获取input输入框的信息
   * 2. ref = {input => this.input = input}  --> this.input 获取输入框的信息
   */
  sreach = () =>{
    // 输入关键字
    const searchName = this.input.value.trim();
    if(searchName){
      // 1. 发布订阅模式：发布消息
      PubSub.publish('search', searchName);
    }
  }

  render(){
    return (
      <div>
        <h1 className={styles.title}>Page users/users</h1>
        {/* 2. 绑定输入信息 ref = {input => this.input = input } */}
        <input name="" ref={input => this.input = input } />
        <input type="submit" value="提交" onClick={this.sreach} />
      </div>
    );
  }
}
export default Users;
