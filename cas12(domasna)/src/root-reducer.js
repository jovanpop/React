import {combineReducers} from "redux";
import {usersReducers} from "./components/users/duck";
import {commentsReducers} from "./components/comments/duck";

export default combineReducers({
    usersReducers,
    commentsReducers
})