import React, {Component} from 'react';

import './redux.css';

class ReactTest extends Component {
  state = {
    count: 0,
  }
  add = () => {
    const num = this.select.value * 1;
    let count = this.state.count + num;
    this.setState({count});
  }
  reduce = () => {
    const num = this.select.value * 1;
    let count = this.state.count - num;
    this.setState({count});
  }
  ifOddAdd = () => {
    const num = this.select.value * 1;
    if (this.state.count % 2 !== 0) {
      let count = this.state.count + num;
      this.setState({count});
    }
  }
  asyncAdd = () => {
    const num = this.select.value * 1;
    let count = this.state.count + num;
    setTimeout(() => {
      this.setState({count});
    }, 2000)
  }

  render() {
    const {count} = this.state;
    return (
      <div style={{margin: '20px'}}>
        <h3>react点击了{count}次!</h3>
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

export default ReactTest;