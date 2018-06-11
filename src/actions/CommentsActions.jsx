import * as actionTypes from './types';
import firebase from 'firebase';

export const textInput = ({ props, value }) => {
    return (
        {
            type: actionTypes.TEXT_INPUT,
            payload: { props, value },
        }
    );
};

export const postComment = ({ name, comment }) => {
    console.log('postdate', grabDate())
    const date = grabDate();
    return (dispatch) => {
        firebase.database().ref(`/comments/`)
        .push({ name, comment, date })
        .then(() => {
            dispatch(
                {
                    type: actionTypes.POST_COMMENT,
                    payload: { name, comment, date }
                }
            )
        })
    }
}; 

const grabDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    return `Time: ${hour}:${min} Date: ${day}/${month}/${year}`
};

