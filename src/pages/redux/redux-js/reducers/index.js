import { combineReducers } from 'redux';
import counter from './counter';
import change from './change';

export default combineReducers({
  counter,
  change
})