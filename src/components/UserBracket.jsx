import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserBracket extends Component {

    markAsCorrectTeam = (round, team) => {
        const { correct } = this.props      
        if (((correct.filter(correctRound => correctRound.arrayVal.length === round.length))[0].arrayVal).includes(team)) {
            return "correctPick"
        }
    };

    goThruArray = () => {
        return(
            this.props.picks.map((round) => {
                    switch (round.length) {
                        case 16:
                            return (
                                [
                                    <ul className='16a'>
                                        {round.slice(8).map(team => <li className={this.markAsCorrectTeam(round, team)}>16a{team}</li>)}
                                    </ul>,
                                    <ul className='16b'>
                                        {round.slice(0,8).map(team => <li className={this.markAsCorrectTeam(round, team)}>16b{team}</li>)}
                                    </ul>
                                ]
                            );
                        case 8:
                            return (
                                [
                                    <ul className='8a'>
                                        {round.slice(4).map(team => <li className={this.markAsCorrectTeam(round, team)}>8a{team}</li>)}
                                    </ul>,
                                    <ul className='8b'>
                                        {round.slice(0,4).map(team => <li className={this.markAsCorrectTeam(round, team)}>8b{team}</li>)}
                                    </ul>
                                ]
                            );
                        case 4:
                            return (
                                [
                                    <ul className='4a'>
                                        {round.slice(2).map(team => <li className={this.markAsCorrectTeam(round, team)}>4a{team}</li>)}
                                    </ul>,
                                    <ul className='4b'>
                                        {round.slice(0,2).map(team => <li className={this.markAsCorrectTeam(round, team)}>4b{team}</li>)}
                                    </ul>
                                ]
                            );
                        case 2:
                            return (
                                [
                                    <ul className='2a'>
                                        {round.slice(2).map(team => <li className={this.markAsCorrectTeam(round, team)}>2a{team}</li>)}
                                    </ul>,
                                    <ul className='2b'>
                                        {round.slice(0,2).map(team => <li className={this.markAsCorrectTeam(round, team)}>2b{team}</li>)}
                                    </ul>
                                ]
                            );
                        case 1:
                            console.log('champion', round[0])
                            return (
                                <ul className='1a'>
                                    <li className={this.markAsCorrectTeam(round, round[0])}>1a{round[0]}</li>
                                </ul>
                            );
                        case 3:
                            return (
                                <ul className='3a'>
                                    <li className={this.markAsCorrectTeam(round, round[0])}>3a{round[0]}</li>
                                </ul>
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