import * as actionTypes from "./actionTypes";
import axios from "axios";


export const bannerMove = ()=>{
    return {
        type: actionTypes.bannerMoveIn
    }
}

export const bannerMoveOut = ()=>{
    return {
        type: actionTypes.bannerMoveOut
    }
}

const changeArticlelist = data => {
    return {
      type: actionTypes.hotArticlelist,
      data
    };
  };
  
  export const hotArticlelist = () => {
    return dispatch => {
      axios
        .get("/api/hotArticle.json")
        .then(res => {
          //console.log(res);
          if (res.data.status === 1) {
            dispatch(changeArticlelist(res.data.data));
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
  };