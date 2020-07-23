import React from 'react';
import styles from './comp.css';

export default

function comp(props) {
  return (
    <div>
      {/* 接收一个带有参数的属性 */}
      <h2>hello, -- {props.attr}</h2>
      <h1 className={styles.title}>Page comp/comp</h1>
    </div>
  );
}

