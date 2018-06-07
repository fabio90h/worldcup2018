import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
    loginMode: true,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    error: '',
    user: null,
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TEXT_CHANGE:
            return(
                {
                    ...state,
                    [action.payload.props]: action.payload.value,
                }
            );
        case actionTypes.TOGGLE_CHANGE:
            return (
                {
                    ...INITIAL_STATE,
                    [action.payload.props]: !action.payload.value,
                }
            );
        case actionTypes.FIREBASE_SUCCESS:
            return (
                {
                    ...state,
                    user: action.user
                }
            );
        case actionTypes.FIREBASE_FAILURE:
            return (
                {
                    ...state,
                    error: action.error,
                }
            );
        default: return state;
    }
};