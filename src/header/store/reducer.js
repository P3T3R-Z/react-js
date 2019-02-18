
import * as actionTypes from "./actionTypes"

// reducer必须是一个纯函数,并且state原始数据是不能直接修改的,
//immutable库用于不修改原始js对象,返回全新的immutable对象
import { fromJS } from "immutable"


//生成immutable对象
const defaultState = fromJS({
  focus: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.search_focus) {
    return state.set('focus', true)   //immutable对象赋值
  }
  if (action.type === actionTypes.search_blur) {
    return state.set('focus', false) 
  }
  return state;
};
