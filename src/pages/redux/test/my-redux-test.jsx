import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './my-redux.css';
import {increment, changeParent, changeSelf} from '../redux-js/actions';

class MyReduxTest extends Component {
  static propTypes = {
    parentBg: PropTypes.string.isRequired,
    selfBg: PropTypes.string.isRequired,
    increment: PropTypes.func.isRequired,
    changeParent: PropTypes.func.isRequired,
    changeSelf: PropTypes.func.isRequired,
  };
  add = () => {
    this.props.increment(1);
  };
  handelchange = (val) =>{
    this.props.changeParent(val);
  };
  handelchange2 = (val) =>{
    this.props.changeSelf(val);
  };
  render() {
    const parentBg = this.props.parentBg;
    const selfBg = this.props.selfBg;
    return (
      <div className = 'my-redux' style = {{background: parentBg}}>
        <button onClick = {this.add} className = 'btn btn-default'>add redux</button>
        <p>
          <button className = 'btn btn-default' onClick={() => this.handelchange('red')}>change parent red</button>
          <button className = 'btn btn-default' onClick={() => this.handelchange('blue')}>change parent blue</button>
          <button style = {{background: selfBg}} className = 'btn btn-default' onClick={() => this.handelchange2('red')}>change self red</button>
          <button style = {{background: selfBg}} className = 'btn btn-default' onClick={() => this.handelchange2('blue')}>change self blue</button>
        </p>
      </div>
    );
  }
}

export default connect(
  state => {console.log(state);return {parentBg: state.change.parentBg, selfBg: state.change.selfBg}},
  {increment, changeParent, changeSelf}
)(MyReduxTest)