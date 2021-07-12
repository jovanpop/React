import React, {useEffect} from "react";
import {CommentsComp} from "./CommentsComp";
import {useSelector,useDispatch} from "react-redux";
import {commentsOperations} from "./duck";
export default function CommentsContainer(){
    const comments=useSelector(state=>state.commentsReducers.comments);
    const error=useSelector(state=>state.commentsReducers.error);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(commentsOperations.fetchComments())
    },[dispatch])
return(
    <div><CommentsComp comments={comments} error={error}/></div>
)
}
