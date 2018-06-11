import * as actionTypes from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    participants: [],
    correct: [],
    points: [],
    picks: [],
    sortedName: [],
    activeUser: null,
    commentsArray: [],
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {    
        case actionTypes.USER_FETCH_SUCCESS:
            // REORGANIZING THE DATA TO ARRAY
            const category = _.map(action.payload, (val) => {
                return { ...val}
            });
            const commentsArray = _.map(category[0], (val) => {
                return {...val}
            })
            const correct = _.map(category[1], (val) => {
                let arrayVal = val.split(',');
                return {arrayVal}
            });
            const participants = _.map(category[2], (val, uid) => {
                let arrayVal = _.map(val)
                arrayVal = arrayVal.map(current => current.split(','))
                return {arrayVal, uid}
            })
            // POINT SYSTEM
            let uidPoints = [];
            participants.forEach((participant) => {
                let userPoint = 0;
                participant.arrayVal.forEach((round) => {
                   round.forEach((team) => {
                       if (correct.filter(correctRound => correctRound.arrayVal.length === round.length).length !== 0) {
                            if (((correct.filter(correctRound => correctRound.arrayVal.length === round.length))[0].arrayVal).includes(team)) {
                                switch (round.length) {
                                    case 16:
                                        userPoint += 2
                                        break
                                    case 8:
                                        userPoint += 3
                                        break
                                    case 4:
                                        userPoint += 8
                                        break
                                    case 2:
                                        userPoint += 15
                                        break
                                    case 1:
                                        userPoint += 30
                                        break
                                    case 3: 
                                        userPoint += 5
                                        break
                                    default: break
                                }
                            } 
                       }
                   })
                })
                uidPoints.push({points: userPoint, uid: participant.uid})
            })
            let keys;
            let sortable = {};
            uidPoints.forEach((point) => {
                sortable[point.uid] = point.points;
            })
            keys = Object.keys(sortable);
            keys.sort(function(a, b) { return sortable[b] - sortable[a]});
            console.log('category', category, 'participants', participants, 'correct', correct, 'uidPoints', uidPoints, 'commentsArray', commentsArray );
            return (
                {
                    ...state,
                    participants: [...participants],
                    correct: [...correct],
                    points: uidPoints,
                    sortedName: keys,
                    commentsArray,
                }
            );
        case actionTypes.USER_CLICK_BRACKET:
            console.log('activeUser: ', action.payload.uid)
            return (
                {
                    ...state,
                    picks: action.payload.bracket,
                    activeUser: action.payload.uid
                }
            );
        case actionTypes.RESET_PICKS:
            return (
                {
                    ...state,
                    picks: [],
                    activeUser: null,
                }
            );
        default: return state;
    }
}