// 包含所有action creator（是action的工厂函数）
//同步action返回对象
//异步action返回函数

import {INCREMENT, DECREMENT, PARENT, SELF} from './action-types';
//增加
export const increment = (num) => ({type: INCREMENT, data: num});
//减少
export const decrement = (num) => ({type: DECREMENT, data: num});
//异步增加
export const incrementAsync = (num)  => {
  return dispatch => {
    //异步代码
    setTimeout(() => {
      dispatch(increment(num))
    },1000)
  }
};
export const changeParent = (color) => ({
  type: PARENT, data: {parentBg: color}
});
export const changeSelf = (color) => ({
  type: SELF, data: {selfBg: color}
});