import React, { Component } from 'react';
import { connect } from 'react-redux'
import { resetPicks } from '../actions';

class UserBracket extends Component {

    markAsCorrectTeam = (round, team) => {
        const { correct } = this.props      
        if (((correct.filter(correctRound => correctRound.arrayVal.length === round.length))[0].arrayVal).includes(team)) {
            return "correctPick"
        }
        return "pick"
    };
    markAsResultsOut = (team) => {
        if (team.length > 2) {
            return "correctPick" 
        }
        return "pick"
    }
    // Will reset the picks and show default bracket
    resetPicks = () => {
        this.props.resetPicks();
    }
    // Will go through the user's pick
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
                                    </div>,
                                    <div id='roundB'>
                                        <div className='team'>{round.slice(8,10).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(10,12).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(12,14).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        <div className='team'>{round.slice(14).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
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
                                    </div>,
                                    <div id='quarterB'>
                                        <div>
                                            <div className='team'>{round.slice(4,6).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                            <div className='team'>{round.slice(6).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                        </div>
                                    </div>
                                ]
                            );
                        case 4:
                            return (
                                [
                                    <div id='semiA'>
                                        <div className='team'>{round.slice(0,2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
                                    </div>,
                                    <div id='semiB'>
                                        <div className='team'>{round.slice(2).map(team => <div className={this.markAsCorrectTeam(round, team)}>{team}</div>)}</div>
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
                                    <div>
                                        <div id='worldcupLogo' onClick={this.resetPicks}/>
                                        <div className='team'><div className={this.markAsCorrectTeam(round, round[0])}>{round[0]}</div></div>                                    
                                    </div>
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
        );
    }
    // Will go through the default pick
    goThruCorrectArray = () => {
        return(
            this.props.correct.map((round) => {
                let currentRound = round.arrayVal;
                console.log('round', currentRound)
                    switch (currentRound.length) {
                        case 16:
                            return (
                                [
                                    <div id='roundA'>
                                        <div className='team'>{currentRound.slice(0,2).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(2,4).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(4,6).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(6,8).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>,
                                    <div id='roundB'>
                                        <div className='team'>{currentRound.slice(8,10).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(10,12).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(12,14).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        <div className='team'>{currentRound.slice(14).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>
                                ]
                            );
                        case 8:
                            return (
                                [
                                    <div id='quarterA'>
                                        <div>
                                            <div className='team'>{currentRound.slice(0,2).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                            <div className='team'>{currentRound.slice(2,4).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        </div>
                                    </div>,
                                    <div id='quarterB'>
                                        <div>
                                            <div className='team'>{currentRound.slice(4,6).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                            <div className='team'>{currentRound.slice(6).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                        </div>
                                    </div>
                                ]
                            );
                        case 4:
                            return (
                                [
                                    <div id='semiA'>
                                        <div className='team'>{currentRound.slice(0,2).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>,
                                    <div id='semiB'>
                                        <div className='team'>{currentRound.slice(2).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>
                                ]
                            );
                        case 2:
                            return (
                                [
                                    <div id='finalA'>
                                        <div className='team'>{currentRound.slice(0,1).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>,
                                    <div id='finalB'>
                                        <div className='team'>{currentRound.slice(1).map(team => <div className={this.markAsResultsOut(team)}>{team}</div>)}</div>
                                    </div>
                                ]
                            );
                        case 1:
                            console.log('champion', currentRound[0])
                            return (
                                <div id='champion'>
                                    <div>
                                        <div id='worldcupLogo'/>
                                        <div className='team'><div className={this.markAsResultsOut(currentRound)}>{currentRound[0]}</div></div>
                                    </div>
                                </div>
                            );
                        case 3:
                            return (
                                <div id='third'>
                                    <div>
                                        <div>3rd Place:</div>
                                        <div className={this.markAsResultsOut(currentRound)}>{currentRound[0]}</div>
                                    </div>
                                </div>
                            );
                        default: return null
                    }
                })
        );
    };

    render() {
        if (this.props.picks.length !== 0) {
            console.log('renderPick', this.props.picks)
            return (
                this.goThruArray() 
              );
        }
        return (
            this.goThruCorrectArray()
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

export default connect(mapStateToProps, { resetPicks })(UserBracket);