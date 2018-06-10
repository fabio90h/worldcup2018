import * as actionTypes from './types';
import firebase from 'firebase';

export const userClickBracket = (participant) => {
    console.log('userClickBracket', participant)
    return (
        {
            type: actionTypes.USER_CLICK_BRACKET,
            payload: participant,
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

// export const calculatePointsFetch = () => {
//     return(
//         {
//             type: actionTypes.CALCULATE_POINTS,
//             payload: 
//         }
//     )
// };