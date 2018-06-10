import * as actionTypes from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    participants: [],
    correct: [],
    points: [],
    picks: []
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        
        case actionTypes.USER_FETCH_SUCCESS:
            // REORGANIZING THE DATA TO ARRAY
            const category = _.map(action.payload, (val) => {
                return { ...val}
            });
            const correct = _.map(category[0], (val) => {
                let arrayVal = val.split(',');
                return {arrayVal}
            });
            const participants = _.map(category[1], (val, uid) => {
                let arrayVal = _.map(val)
                arrayVal = arrayVal.map(current => current.split(','))
                return {arrayVal, uid}
            })
            // POINT SYSTEM
            //console.log(correct.filter(correctRound => correctRound.arrayVal.length === participants[0].arrayVal[0].length)[0].arrayVal);
            //console.log(((correct.filter(correctRound => correctRound.arrayVal.length === participants[0].arrayVal[3].length))[0].arrayVal).includes('Brazil'))
            let uidPoints = [];
            participants.forEach((participant) => {
                let userPoint = 0;
                participant.arrayVal.forEach((round) => {
                   round.forEach((team) => {
                       //console.log('trueOrFalse', correct.filter(correctRound => correctRound.arrayVal.length === round.length))
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
            console.log('category', category, 'participants', participants, 'correct', correct, 'uidPoints', uidPoints );
            return (
                {
                    ...state,
                    participants: [...participants],
                    correct: [...correct],
                    points: uidPoints,
                }
            );
        case actionTypes.USER_CLICK_BRACKET:
            console.log('picks: ', action.payload)
            return (
                {
                    ...state,
                    picks: action.payload
 
                }
            );
        case actionTypes.CALCULATE_POINTS:
            console.log('cal_points',action.payload);
            let pointsArray = [];
            console.log('participats', action.payload.participants)
            action.payload.participants.forEach((participant) => {

                let roundPoints = 0;
                let arrayRound = participant.round.split(',')
                arrayRound.forEach((guessteam) => {
                    if (action.payload.correctround.includes(guessteam)) {
                        roundPoints += 2;
                    }
                })

                let quarterFinalPoints = 0;
                let arrayQuarterFinal = participant.quarterfinal.split(',')
                arrayQuarterFinal.forEach((guessteam) => {
                    if (action.payload.correctquarterfinal.includes(guessteam)) {
                        quarterFinalPoints += 3;
                    }
                })

                let semiFinalPoints = 0;
                let arraySemiFinal = participant.semifinal.split(',')
                arraySemiFinal.forEach((guessteam) => {
                    if (action.payload.correctsemifinal.includes(guessteam)) {
                        semiFinalPoints += 8;
                    }
                })

                let finalPoints = 0;
                let arrayfinal = participant.final.split(',')
                arrayfinal.forEach((guessteam) => {
                    if (action.payload.correctfinal.includes(guessteam)) {
                        finalPoints += 15;
                    }
                })

                let championPoints = 0;
                if (action.payload.correctchampion === participant.final) {
                    championPoints += 30;
                }
                pointsArray.push(
                    { 
                        points: [roundPoints, quarterFinalPoints, semiFinalPoints, finalPoints, championPoints].reduce((total, single) => total + single), 
                        uid: participant.uid,
                    }
                )    
            });
            console.log('pointsArray',pointsArray)
            return (
                {
                    ...state,
                    points: pointsArray,
                }
            );
        default: return state;
    }
}