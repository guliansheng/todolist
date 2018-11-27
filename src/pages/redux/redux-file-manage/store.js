//redux核心的管理对象store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //异步操作依赖
import {composeWithDevTools} from 'redux-devtools-extension'; //redux浏览器插件依赖

const store = createStore(
  composeWithDevTools(applyMiddleware(thunk)) //应用上异步中间件
);// 内部会第一次调用reducer函数得到初始state
export default store;