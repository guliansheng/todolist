import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import CommentApp from "../../pages/comment-page/comment-app";
import RouterBase from "../../pages/router-test/router-base";
import MyNavLink from '../react-router/MyNavLink';
import AntDesign from '../../pages/ant-design/ant-design';
import Redux from '../../pages/redux/redux';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header"><h2>React 基本应用</h2></div>
        <div className="row">
          <div className="col-md-2">
            <div className="btn-group-vertical">
              <button className="btn btn-default">
                <MyNavLink to='/comment-app'>comment-app</MyNavLink>
              </button>
              <button className="btn btn-default">
                <MyNavLink to='/react-router'>react-router</MyNavLink>
              </button>
              <button className="btn btn-default">
                <MyNavLink to='/ant-design'>ant-design</MyNavLink>
              </button>
              <button className="btn btn-default">
                <MyNavLink to='/redux'>redux</MyNavLink>
              </button>
            </div>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path='/comment-app' component={CommentApp}/>
              <Route path='/react-router' component={RouterBase}/>
              <Route path='/ant-design' component={AntDesign}/>
              <Route path='/redux' component={Redux}/>
              <Redirect to='/comment-app'/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

