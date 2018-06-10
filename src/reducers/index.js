import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserListReducer from './UserListReducer';

export default combineReducers(
    {
        auth: AuthReducer,
        userList: UserListReducer
    }
); 