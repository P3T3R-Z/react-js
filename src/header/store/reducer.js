
import * as actionTypes from "./actionTypes"
//header组件的reducer
const defaultState = {
  focus: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.search_focus) {
    return {
      focus: true
    };
  }
  if (action.type === actionTypes.search_blur) {
    return {
      focus: false
    };
  }
  return state;
};
