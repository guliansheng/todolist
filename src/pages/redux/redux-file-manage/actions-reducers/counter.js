import {INCREMENT, DECREMENT} from '../action-types';

export const increment = (num) => ({type: INCREMENT, data: num});
export const decrement = (num) => ({type: DECREMENT, data: num});
export const incrementAsync = (num)  => {
  return dispatch => {
    //异步代码
    setTimeout(() => {
      dispatch(increment(num))
    },1000)
  }
};

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