import React, { useEffect } from "react";
import {UsersComponent} from "./UsersComponent";
import {useSelector,useDispatch} from "react-redux";
import {usersOperations} from "./duck";

export default function UsersContainer (){
    const users=useSelector(state=>state.usersReducers.users);
    const error=useSelector(state=>state.usersReducers.error);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(usersOperations.fetchUsers())
    },[dispatch])
    return(
        <div><UsersComponent users={users} error={error}/></div>
    )
}