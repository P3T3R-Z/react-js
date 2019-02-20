import * as actionTypes from "./actionTypes";
import axios from "axios";

export const renderdetail = (title, content)=>{
    return {
        type: actionTypes.renderdetail,
        title,
        content
    }
}
export const getContent = ()=>{
   return (dispatch)=>{
        axios.get('/api/detail.json')
            .then(res=>{
                if(res.data.status === 1){
                    const action = renderdetail(res.data.data.title, res.data.data.content)
                    dispatch(action)
                }
            })
            .catch(err=>{
                console.log(err)
            })
   }
}
