import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserBracket extends Component {

    markAsCorrectTeam = (round, team) => {
        const { correct } = this.props      
        if (((correct.filter(correctRound => correctRound.arrayVal.length === round.length))[0].arrayVal).includes(team)) {
            return "correctPick"
        }
        return "pick"
    };

    goThruArray = () => {
        return(
            this.props.picks.map((round) => {
                    switch (round.length) {
                        case 16:
                            return (
                                [
                                    <div id='roundA'>
                                        <div className='team'>{round.slice(0,2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(2,4).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(4,6).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(6,8).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        {/* {round.slice(8).map(team => <li className={this.markAsCorrectTeam(round, team)}>16a{team}</li>)} */}
                                    </div>,
                                    <div id='roundB'>
                                        <div className='team'>{round.slice(8,10).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(10,12).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(12,14).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(14).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        {/* {round.slice(0,8).map(team => <li className={this.markAsCorrectTeam(round, team)}>16b{team}</li>)} */}
                                    </div>
                                ]
                            );
                        case 8:
                            return (
                                [
                                    <div id='quarterA'>
                                        <div>
                                            <div className='team'>{round.slice(0,2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                            <div className='team'>{round.slice(2,4).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        </div>
                                        {/* {round.slice(4).map(team => <div className={this.markAsCorrectTeam(round, team)}>8a{team}</div>)} */}
                                    </div>,
                                    <div id='quarterB'>
                                        <div>
                                            <div className='team'>{round.slice(4,6).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                            <div className='team'>{round.slice(6).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        </div>
                                        {/* {round.slice(0,4).map(team => <div className={this.markAsCorrectTeam(round, team)}>8b{team}</div>)} */}
                                    </div>
                                ]
                            );
                        case 4:
                            return (
                                [
                                    <div id='semiA'>
                                        <div className='team'>{round.slice(0,2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        {/* {round.slice(2).map(team => <div className={this.markAsCorrectTeam(round, team)}>4a{team}</div>)} */}
                                    </div>,
                                    <div id='semiB'>
                                        <div className='team'>{round.slice(2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        {/* {round.slice(0,2).map(team => <div className={this.markAsCorrectTeam(round, team)}>4b{team}</div>)} */}
                                    </div>
                                ]
                            );
                        case 2:
                            return (
                                [
                                    <div id='finalA'>
                                        <div className='team'>{round.slice(0,1).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                    </div>,
                                    <div id='finalB'>
                                        <div className='team'>{round.slice(1).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                    </div>
                                ]
                            );
                        case 1:
                            console.log('champion', round[0])
                            return (
                                <div id='champion'>
                                    <div className='team'><div className={this.markAsCorrectTeam(round, round[0])}>{round[0]}</div></div>
                                </div>
                            );
                        case 3:
                            return (
                                <div id='third'>
                                    <div>
                                        <div>3rd Place:</div>
                                        <div className={this.markAsCorrectTeam(round, round[0])}>{round[0]}</div>
                                    </div>
                                </div>
                            );
                        default: return null
                    }
                })
            //})
        );
    }

    render() {
        return (
          this.goThruArray()
        );
    }
}

const mapStateToProps = (state) => {
    const { picks, correct } = state.userList;
    return (
        {
            picks,
            correct
        }
    );
};

export default connect(mapStateToProps, {  })(UserBracket);