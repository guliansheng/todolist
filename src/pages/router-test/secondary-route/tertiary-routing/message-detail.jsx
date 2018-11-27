import React, { Component } from 'react'

const megArr = [
  {id:1, title:'html', content: 'html is very good!'},
  {id:3, title:'javascript', content: 'javascript is very good!'},
  {id:4, title:'java', content: 'java is very good!'},
  {id:7, title:'php', content: 'php is very good!'},
]

export default class MessageDetail extends Component {
  render() {
    //通过 a 链接路径传递的参数存放在props.match.params中,id是标识，是message.jsx 中的Route标签上的路径中的 :id 
    const {id} = this.props.match.params;
    console.log(this.props);
    //这里的id是字符串，和val.id不是同一个类型
    // debugger
    const meg = megArr.find((val)=> val.id === id * 1)
    return (
      <div style = {{margin: '30px'}}>
        <ul>
          <li>{meg.id}</li>
          <li>{meg.title}</li>
          <li>{meg.content}</li>
        </ul>
      </div>
    )
  }
}
