import * as actionTypes from "./actionTypes";
import axios from "axios";

export const bannerMove = () => {
  return {
    type: actionTypes.bannerMoveIn
  };
};

export const bannerMoveOut = () => {
  return {
    type: actionTypes.bannerMoveOut
  };
};

const changeArticlelist = (data, page) => {
  return {
    type: actionTypes.hotArticlelist,
    data,
    page
  };
};

export const hotArticlelist = page => {
  return dispatch => {
    axios
      .get("/api/hotArticle.json", { params: { page } })
      .then(res => {
        //console.log(res);
        if (res.data.status === 1) {
          dispatch(changeArticlelist(res.data.data, page));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getMorelist = page => {
  return dispatch => {
    dispatch(hotArticlelist(page));
  };
};

export  const windowScroll = (show)=>{
  return {
    type: actionTypes.windowScroll,
    show
  }
}