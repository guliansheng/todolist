import React, { Component } from 'react';

import CommentList from '../../components/comment-list/comment-list';
import CommentAdd from '../../components/comment-add/comment-add';
import "./comment-app.css";

export default class CommentApp extends Component {
  state = {
    lis: [
      {img:'../img/1.jpg', name:'gu', content:'html is very good !'},{img:'../img/2.jpg', name:'wang', content:'java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !java is very good !'},
      {img:'../img/3.jpg', name:'li',content:'php is very good !'}
    ]
  }
  add = (comment) => {
    console.log(comment)
    var {lis} = this.state;
    lis.push(comment);
    this.setState({lis});
  }
  remove = (index) => {
    const {lis} = this.state;
    if(window.confirm(`确定删除${lis[index].name}的评论么？`)){
      lis.splice(index,1);
      this.setState({lis});
    }
  }
  render() {
    return (
      <div id='comments'>
        <h2>评论区</h2>
        <hr/>
        <CommentList lis = { this.state.lis} remove = {this.remove}/>
        <CommentAdd add = { this.add}/>
      </div>
    )
  }
}
