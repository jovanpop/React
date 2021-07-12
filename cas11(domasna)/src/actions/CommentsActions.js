import {FETCH_COMMENTS_FAILED,FETCH_COMMENTS_SUCCESS} from "./../constants/CommentsConstants";
export const fetchCommentsSuccess=(comments)=>{
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload:comments
    }
}
export const fetchCommentsFail=(error)=>{
    return{
        type:FETCH_COMMENTS_FAILED,
        payload:error
    }
}
export const fetchCommentRequest=()=>{
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(json=>dispatch(fetchCommentsSuccess(json)))
        .catch(err=>dispatch(fetchCommentsFail(err)))
    }
}