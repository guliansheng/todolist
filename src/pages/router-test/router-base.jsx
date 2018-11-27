import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import News from "./secondary-route/news";
import Message from "./secondary-route/message";
export default class RouterBase extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3>嵌套路由</h3>
        </div>
        <div>
        <ul className = 'nav nav-tabs'>
          <li><NavLink to = '/react-router/news'>二级路由</NavLink></li>
          <li><NavLink to = '/react-router/message'>路由组件传参</NavLink></li>
        </ul>
          <Switch>
            <Route path = '/react-router/news' component = {News}/> 
            <Route path = '/react-router/message' component = {Message}/> 
            <Redirect to = '/react-router/news'/>
          </Switch>
        </div>
      </div>
    )
  }
}