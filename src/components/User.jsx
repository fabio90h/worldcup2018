import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions';

class User extends Component {
    componentDidMount() {
    
    }
    
    render () {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (state) => {
    const {  } = state.userList
    return (
        {
        }
    );
};

export default connect(mapStateToProps, { } )(User);