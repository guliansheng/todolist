import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux-js/store';
import ReactTest from './test/react-test';
import ReduxTest from './test/redux-test';
import MyReduxTest from './test/my-redux-test';

//store直接绑定到根节点，整个组件都可以接收store
class Redux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ul className='nav nav-tabs'>
            <li><NavLink to='/redux/react-test'>react-test</NavLink></li>
            <li><NavLink to='/redux/redux-test'>redux-test</NavLink></li>
            <li><NavLink to='/redux/my-redux-test'>my-redux-test</NavLink></li>
          </ul>
          <div>
            <Switch>
              <Route path='/redux/react-test' component={ReactTest}/>
              <Route path="/redux/redux-test" component={ReduxTest}/>
              <Route path="/redux/my-redux-test" component={MyReduxTest}/>
              <Redirect to='/redux/react-test'/>
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Redux;