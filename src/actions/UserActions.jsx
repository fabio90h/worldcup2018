import * as actionTypes from './types';
import firebase from 'firebase';

export const userClickBracket = (bracket, uid) => {
    console.log('userClickBracket', bracket, 'uid', uid)
    return (
        {
            type: actionTypes.USER_CLICK_BRACKET,
            payload: {bracket, uid}
        }
    );
}

export const userListFetch = () => {
    return ((dispatch) => {
        firebase.database().ref(`/`)
        .on('value', (snapshot) => {
            console.log('userListFetch: ', snapshot.val())
            dispatch(
                {
                    type: actionTypes.USER_FETCH_SUCCESS,
                    payload: snapshot.val(),
                }
            )
        })
    });
};