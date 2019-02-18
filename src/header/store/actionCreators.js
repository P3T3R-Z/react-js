import * as actionTypes from "./actionTypes";
import axios from "axios";

export const seach_focus = ()=>{
    return {
        type: actionTypes.search_focus
    }
}

export const seach_blur = ()=>{
    return {
        type: actionTypes.search_blur
    }
}

const changeRecommendList=(data)=>{
    return {
        type: actionTypes.changeRecommendList,
        data: data
    }
}

export const getRecommendlist = ()=>{
   return (dispatch)=>{
        axios.get('/api/list.json')
            .then(res=>{
                
                if(res.data.status === "1"){
                    const action = changeRecommendList(res.data.data)
                    dispatch(action)
                }
            })
            .catch(err=>{
                console.log(err)
            })
   }
}

