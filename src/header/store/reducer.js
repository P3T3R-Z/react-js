import * as actionTypes from "./actionTypes";

// reducer必须是一个纯函数,并且state原始数据是不能直接修改的,
//immutable库用于不修改原始js对象,返回全新的immutable对象
//不使用immutable库时, 赋值取值按照js对象的取赋值, reducer中不能修改state原始数据
import { fromJS } from "immutable";

//生成immutable对象, 使state变成immutable对象,子集页是immutable对象, 赋值时需要对应immutable对象
const defaultState = fromJS({
  focus: false,
  recommendList: []
});


export default (state = defaultState, action) => {
  
  switch (action.type) {
    case actionTypes.search_focus:
      return state.set("focus", true); //immutable对象赋值
    case actionTypes.search_blur:
      return state.set("focus", false);
    case actionTypes.changeRecommendList:
      
      //返回的action.data数组是js对象,需要改成immutable对象赋值
      return state.set("recommendList", fromJS(action.data));

      //不使用immutable用法: 需要深度拷贝对象后赋值, return新的对象
      // let newList = JSON.parse(JSON.stringify(state));
      //  action.data.forEach(item=>{
      //   newList.recommendList.push(item)
      //  })
      
      // return newList
    default:
      return state;
  }
};
