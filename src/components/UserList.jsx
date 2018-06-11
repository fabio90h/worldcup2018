import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userListFetch, userClickBracket } from '../actions';
// import User from './User';


class UserList extends Component {
    componentDidMount () {            
        this.props.userListFetch();
    }

    // SHOWS USER BRACKET
    onListClick = (participant) => {
        this.props.userClickBracket(participant.arrayVal, participant.uid);
    }

    participantList = () => {
        const { participants, points, sortedName, activeUser } = this.props 
        return sortedName.map((name, index) => {
            return participants.map((participant) => {
                if (name === participant.uid) {
                    if (activeUser && activeUser === participant.uid) {
                        return <div style={{backgroundColor:'green'}} className='user' key={participant.uid} onClick={() => this.onListClick(participant)}>
                        <span style={{color: 'green'}}>{index+1}.  </span><span style={{color: 'red'}}>{participant.uid}</span> <span style={{color: 'blue'}}>{`pts: ${(points.filter(userPoint => userPoint.uid === participant.uid))[0].points}`}</span>
                        </div>
                    }
                    return <div className='user' key={participant.uid} onClick={() => this.onListClick(participant)}>
                    <span style={{color: 'green'}}>{index+1}.  </span><span style={{color: 'red'}}>{participant.uid}</span> <span style={{color: 'blue'}}>{`pts: ${(points.filter(userPoint => userPoint.uid === participant.uid))[0].points}`}</span>
                    </div>
                }
                return null;
            });
        })
    };

    render () {
        return (
            <div id='participantList'>
                {this.participantList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { participants, points, correct, sortedName,  activeUser } = state.userList
    return (
        {
            participants,
            points,
            correct,
            sortedName,
            activeUser
        }
    );
};

export default connect(mapStateToProps, { userListFetch, userClickBracket })(UserList);