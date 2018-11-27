import React, {Component} from 'react';
import {Button, Toast} from 'antd-mobile';

import './ant.css';

class AntDesign extends Component {
  state = {
    messages: []
  };
  handelClick = () => {
    Toast.info('this is info')
  };
  handelAdd() {
    let messages = this.state.messages;
    messages.unshift(messages.length+1);
    this.setState({messages});
  }
  componentDidMount(){
    this.timer = setInterval(() => {
      console.log('定时器执行...');
      this.handelAdd();
    },1000);
  }
  //最新的渲染输出提交给DOM前将会立即调用。它让你的组件能在当前的值可能要改变前获得它们。这一生命周期返回的任何值将会 作为参数被传递给componentDidUpdate()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return this.refs.msg.scrollHeight;
  }
  //组件更新后调用（第三个参数是getSnapshotBeforeUpdate的返回值）
  componentDidUpdate(prevProps, prevState, prevScrollHeight){
    console.log('componentDidUpdate');
    console.log(this.refs.msg.scrollTop, prevScrollHeight);
    if(this.refs.msg.scrollTop>0){
      this.refs.msg.scrollTop += this.refs.msg.scrollHeight - prevScrollHeight;
    }
  }
  render() {
    const {messages} = this.state;
    return (
      <div>
        <div className="msg" ref= 'msg'>
          <ul>
            {messages.map((val, index) => <li key = {index}>{val}</li>)}
          </ul>
        </div>
        <Button type = 'primary' onClick = {this.handelClick}>按钮</Button>
      </div>
    );
  }
}

export default AntDesign;