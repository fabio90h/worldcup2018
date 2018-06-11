import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
    name: '',
    comment: '',
    commentsArray: [],
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TEXT_INPUT:
            return (
                {
                    ...state,
                    [action.payload.props]: action.payload.value,
                }
            );
        case actionTypes.POST_COMMENT:
            return (
                {
                    ...INITIAL_STATE,
                    commentsArray: action.payload
                }
            );
        default: return state;
    } 
};