import * as actionTypes from "./actionTypes";
import axios from "axios";

const renderdetail = (title, content)=>{
    return {
        type: actionTypes.renderdetail,
        title,
        content
    }
}
export const getContent = ()=>{
    var r = /<[^img\/][a-z1-5]+[\s\S]*?>+/gim;
   return (dispatch)=>{
        axios.get('/api/detail.json')
            .then(res=>{
                if(res.data.status === 1){
                    const action = renderdetail(res.data.data.title, res.data.data.content.replace(r, '<div>') )
                    dispatch(action)
                }
            })
            .catch(err=>{
                console.log(err)
            })
   }
}
