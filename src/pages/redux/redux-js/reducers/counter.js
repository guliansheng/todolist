// 包含n个reducer函数模块（根据老的state和action返回一个新的state）
// 接收参数固定
// 不能直接改变老的state的值
import {INCREMENT, DECREMENT} from '../action-types';
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data;
    case DECREMENT:
      return state - action.data;
    default:
      return state
  }
}