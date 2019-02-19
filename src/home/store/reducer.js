import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

import banner1 from "../../assets/image/home/banner1.jpg";
import banner2 from "../../assets/image/home/banner2.jpg";

import tabpic1 from "../../assets/image/home/right_tab1.png";
import tabpic2 from "../../assets/image/home/right_tab2.png";
import tabpic3 from "../../assets/image/home/right_tab3.png";
import tabpic4 from "../../assets/image/home/right_tab4.png";
import tabpic5 from "../../assets/image/home/right_tab5.png";

const defaultState = fromJS({
  banner: [banner1, banner2],
  tabnav: [
    {
      img: tabpic1,
      url: "/"
    },
    {
      img: tabpic2,
      url: "/"
    },
    {
      img: tabpic3,
      url: "/"
    },
    {
      img: tabpic4,
      url: "/"
    },
    {
      img: tabpic5,
      url: "/"
    }
  ],
  bannerMoveStatus: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.bannerMoveIn:
      return state.set("bannerMoveStatus", true);
    case actionTypes.bannerMoveOut:
      return state.set("bannerMoveStatus", false);
    case actionTypes.hotArticlelist:
      return state.set("list", fromJS(action.data)); //多层数据需要转immutable对象
    default:
      return state;
  }
};
