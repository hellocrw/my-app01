import React from 'react';
import styles from './users.css';
import {PubSub} from 'pubsub-js';
import { Input,Button } from 'antd';

class Users extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'users',
      arr: Array(9).fill(1),
      searchName: '',
    }
  }

  /**
   * 1. ref = 'content'  -->  this.refs.content 获取input输入框的信息
   * 2. ref = {input => this.input = input}  --> this.input 获取输入框的信息
   */
  sreach = () =>{
    // 输入关键字
    const searchName = this.state.searchName;
    console.log(searchName);
    if(searchName){
      // 1. 发布订阅模式：发布消息
      PubSub.publish('search', searchName);
    }
  }

  changeName(event){
    this.setState({
      searchName: event.target.value,
    })
  }

  render(){
    return (
      <div style={{ textAlign: "center"}}>
        {/* <h1>Users page</h1> */}
        <h1 className={styles.title}>Page users/users</h1>
        {/* 2. 绑定输入信息 ref = {input => this.input = input } */}
        <Input value={this.state.searchName} onChange={this.changeName.bind(this)} 
         ref={input => this.input = input }
         style={{
           width:"200px"
         }}
         />
        {/* <input type="submit" value="提交" onClick={this.sreach} /> */}
        <Button onClick={this.sreach} type="primary">提交</Button>
      </div>
    );
  }
}
export default Users;
