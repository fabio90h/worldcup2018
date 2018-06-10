import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserBracket extends Component {
    goThruArray = () => {
        return(
            this.props.picks.map((round) => {
                switch (round.length) {
                    case 16:
                        return round.map(team => <li>16{team}</li>)
                    case 8:
                        return round.map(team => <li>8{team}</li>)
                    case 4:
                        return round.map(team => <li>4{team}</li>)
                    default: return null
                }
            })
        );
    }

    render() {
        return (
            this.goThruArray()
        );
    }
}

const mapStateToProps = (state) => {
    const { picks } = state.userList;
    return (
        {
            picks
        }
    );
};

export default connect(mapStateToProps, {  })(UserBracket);