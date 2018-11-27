import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './redux.css';
import {increment, decrement, incrementAsync} from '../redux-js/actions';

class ReduxTest extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  };
  add = () => {
    const num = this.select.value * 1;
    //调用store的方法更新状态
    this.props.increment(num);
  };
  reduce = () => {
    const num = this.select.value * 1;
    this.props.decrement(num);
  };
  ifOddAdd = () => {
    const num = this.select.value * 1;
    if (this.props.count % 2 !== 0) {
      this.props.increment(num);
    }
  };
  asyncAdd = () => {
    const num = this.select.value * 1;
    this.props.incrementAsync(num);
  };

  render() {
    const {count} = this.props;
    return (
      <div style={{margin: '20px'}}>
        <h3>redux点击了{count}次!</h3>
        <div className='react-test'>
          <select className="form-control" ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br/>
          <button className='btn btn-default' onClick={this.add}>+</button>
          <button className='btn btn-default' onClick={this.reduce}>-</button>
          <button className='btn btn-default' onClick={this.ifOddAdd}>odd</button>
          <button className='btn btn-default' onClick={this.asyncAdd}>async</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({count: state.counter}),
  {increment, decrement, incrementAsync}
)(ReduxTest);