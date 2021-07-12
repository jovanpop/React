import React, { useEffect } from "react";
import {fetchCommentRequest} from "./../actions/CommentsActions";
import { useSelector,useDispatch } from "react-redux";

export function Comments(){
    const dispatch=useDispatch();
    const comments=useSelector(state=>state.CommentsReducer.comments);
    useEffect(()=>{
        dispatch(fetchCommentRequest())
    },[dispatch])
    return(
        <div><h2>Comments: {comments.length}</h2></div>
    )
}