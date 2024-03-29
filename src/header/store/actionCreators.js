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
        data: data,
        page: Math.ceil(data.length/10)
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

export const mouseEnter=()=>{
    return {
        type: actionTypes.mouseEnter
    }
}

export const mouseLeave=()=>{
    return {
        type: actionTypes.mouseLeave
    }
}

export const changeListShow=(page)=>{
    return {
        type: actionTypes.changeListShow,
        page
    }
}