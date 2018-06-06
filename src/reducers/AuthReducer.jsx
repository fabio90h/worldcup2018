import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
    loginMode: true,
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
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
        default: return state;
    }
};