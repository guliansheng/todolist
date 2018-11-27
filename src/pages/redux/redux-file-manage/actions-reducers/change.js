import {SELF, PARENT} from "../action-types";

export default function change(state = {parentBg: 'white', selfBg: 'white'}, action) {
  switch (action.type) {
    case PARENT:
      return {parentBg: action.data.parentBg, selfBg: state.selfBg};
    case SELF:
      return {selfBg: action.data.selfBg, parentBg: state.parentBg};
    default:
      return state
  }
}

export const changeParent = (color) => ({
  type: PARENT, data: {parentBg: color}
});
export const changeSelf = (color) => ({
  type: SELF, data: {selfBg: color}
});