import React, { Component } from 'react'
import { connect } from 'react-redux';
import { textChange, toggleChange, registerButton, loginButton } from '../actions'


class LoginForm extends Component {
    // CHANGE STATE TEXT
    onEmailChange(text) {
        this.props.textChange({props: 'email', value: text.target.value});
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

    //ON BUTTON PRESS
    onRegisterButtonPress(event) {
        //Need email, name, last name, password, confirm password
        event.preventDefault();
        const { email, password, firstName, lastName } = this.props;
        this.props.registerButton({email, password, firstName, lastName});
    }
    onLoginButtonPress(event) {
        //Need email, password
        event.preventDefault();
        const { email, password } = this.props;
        this.props.loginButton({email, password});
    }

    //TOGGLE BETWEEN LOGIN MODER OF CREATE A NEW USER MODE
    onChangeLoginOrCreate() {
        this.props.toggleChange({props: 'loginMode', value: this.props.loginMode})
    }
    render() {
        return(
            <div style={styles.container}>
                <h2 >Login</h2>
                <form>
                    {
                        this.props.loginMode
                        ?
                            <div style={styles.formStyle}>
                                {/* EMAIL */}
                                <label>Email</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onEmailChange.bind(this)} 
                                    type="text" 
                                    value={this.props.email}
                                    placeholder="JohnDoe88"/>
                                {/* PASSWORD */}
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
                                {/* EMAIL */}
                                <label>Email</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onEmailChange.bind(this)} 
                                    type="text" 
                                    value={this.props.email}
                                    placeholder="JohnDoe@gmail.com"/>
                                {/* FIRST NAME */}
                                <label>First Name</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onFirstNameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.firstName}
                                    placeholder="John"/> 
                                {/* LAST NAME */}
                                <label>Last Name</label>
                                <input
                                    style={styles.inputStyle} 
                                    onChange={this.onLastNameChange.bind(this)} 
                                    type="text" 
                                    value={this.props.lastName}
                                    placeholder="Doe"/>
                                {/* PASSWORD */}
                                <label>Password</label>
                                <input 
                                    style={styles.inputStyle} 
                                    onChange={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    type="password" 
                                    placeholder="Password"/>
                                {/* CONFIRM PASSWORD */}
                                <label>Confirm Password</label>
                                <input 
                                    style={styles.inputStyle} 
                                    onChange={this.onConfirmPasswordChange.bind(this)}
                                    value={this.props.confirmPassword}
                                    type="password" 
                                    placeholder="Password"/>
                            </div>
                    }
                    {this.props.error ? <div style={{textAlign: 'center', color: 'red'}}>{this.props.error}</div> : null }
                    { this.props.loginMode 
                        ? 
                            <button onClick={this.onLoginButtonPress.bind(this)}>Login</button> 
                        : 
                            <button onClick={this.onRegisterButtonPress.bind(this)}>Register</button>
                    }
                </form>
                {/* CHANGES FROM LOGIN TO REGISTER DEPENDING ON LOGIN MODE STATE */}
                <div style={{textAlign: 'center', marginTop: '15px', fontSize: '.5em'}}>
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

// STYLE
const styles = {
    container:{
        border: '1px solid black',
        padding: '20px',
        width: '35%',
        margin: '50px auto',
    },
        formStyle: {
            display: 'flex',
            width: '100%',
            margin: '10px auto',
            flexDirection: 'column',
        },
            inputStyle: {
                margin: '5px 0',
                height: '20px',
            }
};

const mapStateToProps = (state) => {
    const {
        loginMode,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        error,
        user,
    } = state.auth;
    
    console.log(
        loginMode,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        error,
        user,
    );

    return(
        {
            loginMode,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            error,
            user,
        }
    );
};

export default connect(mapStateToProps, { textChange, toggleChange, registerButton, loginButton })(LoginForm); 