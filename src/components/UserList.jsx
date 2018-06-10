import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userListFetch, userClickBracket } from '../actions';
import User from './User';


class UserList extends Component {
    componentDidMount () {            
        this.props.userListFetch();
    }

    // SHOWS USER BRACKET
    onListClick = (participant) => {
        this.props.userClickBracket(participant.arrayVal);
    }

    participantList = () => {
        // const { participants, correctround, correctsemifinal, correctquarterfinal, correctfinal, correctchampion} = this.props;        
        // this.props.calculatePointsFetch(participants, correctround, correctsemifinal, correctquarterfinal, correctfinal, correctchampion ); 
        const { participants, points } = this.props    
        if (participants) {
            return participants.map((participant) => {
                
                console.log('pp', (points.filter(userPoint => userPoint.uid === participant.uid))[0].points)
                return <li key={participant.uid}>
                {participant.uid} points: {(points.filter(userPoint => userPoint.uid === participant.uid))[0].points} {}<button onClick={() => this.onListClick(participant)}>view bracket</button>
            </li>
            });
        }
    };

    render () {
        return (
            <ul>
                {this.participantList()}
                <User/>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const { participants, points, correct } = state.userList
    return (
        {
            participants,
            points,
            correct,
        }
    );
};

export default connect(mapStateToProps, { userListFetch, userClickBracket })(UserList);