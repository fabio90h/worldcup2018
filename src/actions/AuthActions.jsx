import * as actionTypes from './types';
import firebase from 'firebase';

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

export const loginButton = ({email, password}) => {
    return (dispatch) => {
        // dispatch({type: actionTypes.LOGIN_BUTTON});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => firebaseSuccess(dispatch, user))
                .catch((error) => firebaseFailure(dispatch, error));
    };
}
export const registerButton = ({
    email, 
    password, 
    firstName, 
    lastName}) => 
    {
        return (dispatch) => {
            // dispatch({type: actionTypes.REGISTER_BUTTON});
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => firebaseSuccess(dispatch, user))
                    .catch((error) => firebaseFailure(dispatch, error));
        };

    }


const firebaseSuccess = (dispatch, user) => {
    console.log('success', user)
    dispatch(
        {
            type: actionTypes.FIREBASE_SUCCESS,
            user
        }
    )
};
const firebaseFailure = (dispatch, error) => {
    const { message } = error
    console.log('error', message)
    dispatch(
        {
            type: actionTypes.FIREBASE_FAILURE,
            error: message,
        }
    )
};