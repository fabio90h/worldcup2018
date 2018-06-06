import React, { Component } from 'react'
import { connect } from 'react-redux';
import { textChange, toggleChange } from '../actions'


class LoginForm extends Component {
    // CHANGE STATE TEXT
    onUsernameChange(text) {
        this.props.textChange({props: 'username', value: text.target.value});
    };
    onPasswordChange(text) {
        this.props.textChange({props: 'password', value: text.target.value});
    };
    onConfirmPasswordChange(text) {
        this.props.textChange({props: 'confirmPassword', value: text.target.value});                
    }
    onFirstNameChange(text) {
        this.props.textChange({props: 'firstName', value: text.target.value});        
    }
    onLastNameChange(text) {
        this.props.textChange({props: 'lastName', value: text.target.value});        
    }

    //TOGGLE BETWEEN LOGIN MODER OF CREATE A NEW USER MODE
    onChangeLoginOrCreate() {
        this.props.toggleChange({props: 'loginMode', value: this.props.loginMode})
    }
    render() {
        return(
            <div style={styles.container}>
                <h2 style={{textAlign: 'center'}}>Login</h2>
                <form>
                    {
                        this.props.loginMode
                        ?
                            <div style={styles.formStyle}>
                                <label>Username</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onUsernameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.username}
                                    placeholder="JohnDoe88"/>

                                <label>Password</label>
                                <input 
                                    style={styles.inputStyle} 
                                    onChange={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    type="password" 
                                    placeholder="Password"/>
                            </div>
                        :
                            <div style={styles.formStyle}>
                                <label>Username</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onUsernameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.username}
                                    placeholder="JohnDoe88"/>
                                <label>First Name</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onFirstNameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.firstName}
                                    placeholder="John"/>
                                <label>Last Name</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onLastNameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.lastName}
                                    placeholder="Doe"/>

                                <label>Password</label>
                                <input 
                                    style={styles.inputStyle} 
                                    onChange={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    type="password" 
                                    placeholder="Password"/>
                                <label>Confirm Password</label>
                                <input 
                                    style={styles.inputStyle} 
                                    onChange={this.onConfirmPasswordChange.bind(this)}
                                    value={this.props.confirmPassword}
                                    type="password" 
                                    placeholder="Password"/>
                            </div>
                    }
                    { this.props.loginMode ? <button>Login</button> : <button>Register</button>}
                </form>
                {/* CHANGES FROM LOGIN TO REGISTER DEPENDING ON LOGIN MODE STATE */}
                <div style={{textAlign: 'center'}}>
                    {this.props.loginMode ? 'Dont have an account?' : 'Already have an account?'}
                    <a 
                        style={{marginLeft: '5px', cursor: 'pointer'}}
                        onClick={this.onChangeLoginOrCreate.bind(this)}>
                        <strong><u>{this.props.loginMode ? 'Create new account' : 'Login'}</u></strong>
                    </a>
                </div>
            </div>
        );
    }
}

const styles = {
    container:{
        border: '1px solid black',
        padding: '5px',
        width: '35%',
        margin: '50px auto',
    },
        header: {
            textAlign: 'center',
        },
        formStyle: {
            display: 'flex',
            width: '100%',
            margin: '10px auto',
            flexDirection: 'column',
        },
            inputStyle: {
                marginBottom: '10px',
                height: '20px',
            }
};

const mapStateToProps = (state) => {
    const {
        username, 
        password, 
        loginMode, 
        firstName,
        lastName,
        confirmPassword,
    } = state.auth;
    
    console.log(
        password, 
        username, 
        loginMode,
        firstName,
        lastName,
        confirmPassword,
    );

    return(
        {
            username,
            password,
            loginMode,
            firstName,
            lastName,
            confirmPassword,
        }
    );
};

export default connect(mapStateToProps, { textChange, toggleChange })(LoginForm); 