import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment-add.css';

class CommentAdd extends Component {

  static proptypes = {
    add:　PropTypes.func.isRequired
  };
  Doadd = () => {
    const {add} = this.props;
    console.log(add);
    if(!this.img.value){
      this.img.value = '1.jpg'
    }
    if(!this.name.value){
      this.name.value = 'gu'
    }
    var comment = {img:`../img/${this.img.value}`,name:this.name.value
    ,content:this.content.value};
    console.log(comment);
    add(comment);
    this.img.value = '';
    this.name.value = '';
    this.content.value = '';
  };
  addK = (e) => {
    if(e.keyCode === 13 && e.ctrlKey){
      this.Doadd();
    }
  };
  render() {
    return (
      <div id='Toadd'>
        <input ref={ val=> this.img = val} type = 'text' placeholder="用户头像"/>
        <input ref={ val=> this.name = val} type = 'text' placeholder="用户名"/>
        <textarea ref={val => this.content = val} onKeyDown = {this.addK}/>
        <button onClick={ this.Doadd} className='addC'>add comment</button>
      </div>
    )
  }
}

export default CommentAdd;
