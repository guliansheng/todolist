/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment-list.css';

class CommentList extends Component {
  
  static propTypes = {
    lis: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
  }
  handleRemove = (e) => {
    const remove = this.props.remove;
    remove(e.target.getAttribute('index'));
  }
  render = () => { 
    const {lis} = this.props;
    console.log(lis);
    var flag = lis.length === 0 ? 'block': 'none';
    return (
      <div id='Tolist'>
        <h2 style = {{display: flag,marginBottom: '30px'}}>暂无评论，请添加评论！！！</h2>
        <ul>
          {lis.map((val,index) =>         
             <li key = {index} >
                <div className = 'img'>
                  <img src = {require('../img/1.jpg')}/>
                  <span index = {index} onClick = {this.handleRemove}>&times;</span>
                </div>
                <div className = 'center'>
                    <span><strong>{val.name}：</strong></span>
                    <span>{val.content}</span>
                </div>
            </li>
          )}
        </ul>
      </div>
    ) 
  } 
}

export default CommentList;