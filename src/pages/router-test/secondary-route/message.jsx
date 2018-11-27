import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom";

import MessageDetail from "./tertiary-routing/message-detail";

const megArr = [
  {id:1, title:'html', content: 'html is very good!'},
  {id:3, title:'javascript', content: 'javascript is very good!'},
  {id:4, title:'java', content: 'java is very good!'},
  {id:7, title:'php', content: 'php is very good!'},
];
export default class Message extends Component {
  showMeg = (id) => {
    this.props.history.push('/react-router/message/messagedetail/'+id)
  };
  showMeg2 = (id) => {
    this.props.history.replace('/react-router/message/messagedetail/'+id)
  };
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div>
        <ul className = 'nav nav-tabs'>
          {megArr.map((val, index) =>
            <li key = {index}>
              <Link to = {"/react-router/message/messagedetail/"+val.id}>{val.title}</Link>
              <button onClick = {() => this.showMeg(val.id)}>push()查看</button>
              <button onClick = {() => this.showMeg2(val.id)}>replace()查看</button>
            </li>)}
        </ul>
        <div style = {{margin:'20px'}}>
          <button onClick = {this.back}>回退</button>
          <button onClick={ this.forward}>前进</button>
        </div>
        <Switch>
          <Route path = '/react-router/message/messagedetail/:id' component = {MessageDetail} />
          <Redirect to = '/react-router/message/messagedetail/1'/>
        </Switch>
      </div>
    )
  }
}
