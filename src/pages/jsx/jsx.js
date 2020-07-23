import React from 'react';
import ReactDOM from 'react-dom';
import styles from './jsx.css';

// const name = "josh";
// const element = <h1>{name}</h1>
function tick() {
  const element = (
    <div>
      <h2>hello , world</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('jsx')
  );
}
// 回调函数
setInterval(tick, 1000);

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page jsx/jsx</h1>
    </div>
  );
}