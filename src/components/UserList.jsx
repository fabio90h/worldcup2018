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
        this.props.userClickBracket(participant.arrayVal);
    }
    objectSort = () => {
        const { points } = this.props;
        let keys;
        let sortable = {};
        points.forEach((point) => {
            sortable[point.uid] = point.points;
        })
        keys = Object.keys(sortable);
        keys.sort(function(a, b) { return sortable[b] - sortable[a] });
        console.log('key', keys)
        
    }

    participantList = () => {
        const { participants, points, sortedName } = this.props 
        console.log('sortedName', sortedName);
        return sortedName.map((name, index) => {
            return participants.map((participant) => {
                if (name === participant.uid) {
                    return <div className='user' key={participant.uid} onClick={() => this.onListClick(participant)}>
                    <span style={{color: 'green'}}>{index+1}.  </span><span style={{color: 'red'}}>{participant.uid}</span> <span style={{color: 'blue'}}>{`points: ${(points.filter(userPoint => userPoint.uid === participant.uid))[0].points}`}</span>
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
    const { participants, points, correct, sortedName } = state.userList
    return (
        {
            participants,
            points,
            correct,
            sortedName,
        }
    );
};

export default connect(mapStateToProps, { userListFetch, userClickBracket })(UserList);