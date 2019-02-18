import HeaderReducer from "../header/store/reducer";
import { combineReducers } from "redux"

//合并成大的reducer
export default combineReducers({
  header: HeaderReducer
})
