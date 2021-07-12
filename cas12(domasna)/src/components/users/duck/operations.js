import {getUsers} from "./../../../api/usersApi";
import actions from "./actions";
const fetchUsers=(requestParams)=>{
    return dispatch =>{
        dispatch(actions.fetchUsersRequest(requestParams))
        return getUsers(requestParams)
        .then(result=>{
            dispatch(actions.fetchUsersSuccess(result))
            return result;
        })
        .catch(error=>{
            dispatch(actions.fetchUsersFail(error))
            return error;
        })
    }
}
export default{
    fetchUsers
}