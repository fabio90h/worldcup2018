import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserListReducer from './UserListReducer';
import CommentReducer from './CommentReducer'

export default combineReducers(
    {
        auth: AuthReducer,
        userList: UserListReducer,
        comments: CommentReducer,
    }
); 