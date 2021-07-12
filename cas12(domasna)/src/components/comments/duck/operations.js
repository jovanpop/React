import { getComments } from "./../../../api/commentsApi";
import actions from "./actions";
const fetchComments=(requestParams)=>{
    return dispatch=>{
        dispatch(actions.fetchCommentsRequest(requestParams))
        return getComments(requestParams)
        .then(result=>{
            dispatch(actions.fetchCommentsSuccess(result))
            return result;
        })
        .catch(error=>{
            dispatch(actions.fetchCommentsFail(error))
            return error;
        })
    }
}
export default{
    fetchComments
}