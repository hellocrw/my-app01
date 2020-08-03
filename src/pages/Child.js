import React from 'react';
// import styles from './Child.css';

class Child extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            name:'Andy',
            age:31,
            msg:"来自子类的消息"
        }
    }

    componentWillMount(){
        console.log('state:', this.props.childMsg);
    }

    toParent =() => {
        // 3. 子组件 -> 父组件
        this.props.parent.getChildMsg(this.state.msg);
    }

    render(){
        return(
            <div>
                <h1>child page</h1>
                {/* 2.父组件-> 子组件 , 子组件利用props接收父组件的值 */}
                <p>{this.props.name}</p>
                {/* 2. 子组件 -> 父组件 */}
                <button onClick={this.toParent}> 子组件给父组件传值</button>
            </div>
        )
    }
}
export default Child;