import { HeaderReducer } from "../header/store";
//import { combineReducers } from "redux";//普通用法

//将reducer变成immutable对象,使得reducer取值变成immutable对象取法
import { combineReducers } from "redux-immutable"  


//合并成大的reducer
export default combineReducers({
  header: HeaderReducer
});
