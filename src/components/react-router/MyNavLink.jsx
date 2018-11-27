import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//重新包装NavLink组件
export default class MyNavLink extends Component {
  render() {
    //将外部传入的所有属性传递给NavLink
    return <NavLink {...this.props} activeClassName = 'activeClass'/>
  }
}
