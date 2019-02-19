import { HeaderReducer } from "../header/store";
import { HomeReducer } from "../home/store";

//import { combineReducers } from "redux";//不使用immutable对象用法

//将reducer变成immutable对象,使得reducer取值变成immutable对象取法
import { combineReducers } from "redux-immutable"  


//合并成大的reducer
export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer
});
