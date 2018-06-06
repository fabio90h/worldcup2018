import * as actionTypes from './types';

export const textChange = ({props, value}) => {
    return(
        {
            type: actionTypes.TEXT_CHANGE,
            payload: { props, value },
        }
    );
};

export const toggleChange = ({props, value}) => {
    return (
        {
            type: actionTypes.TOGGLE_CHANGE,
            payload: { props, value }
        }
    );
}