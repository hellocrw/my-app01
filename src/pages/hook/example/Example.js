import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  // useState就是一个hook
  const [count, setCount] = useState(0);
  // 声明多个 state 变量！
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // useEffect的使用
  // 相当于 componentDimount 和 componentDidUpdate
  useEffect(() => {
    // 使用浏览器的API更新页面标题
    // document.title = `useEffect->you clicked ${count} times`;
  })

  return (
    <div>
      
      <Button onClick={() => setCount(count + 1)} type="primary" style={{
        margin: "40px"
      }}>
        Click me
      </Button>

      <h2>You clicked {count} times</h2>
    </div>
  );
}
export default Example;