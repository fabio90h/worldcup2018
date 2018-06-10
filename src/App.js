import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import UserBracket from './components/UserBracket';
import UserList from './components/UserList';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBv-Y4ngOzbgBESRGxkiJ_-9cfwBnQPFdo",
        authDomain: "world-cup-e68f1.firebaseapp.com",
        databaseURL: "https://world-cup-e68f1.firebaseio.com",
        projectId: "world-cup-e68f1",
        storageBucket: "world-cup-e68f1.appspot.com",
        messagingSenderId: "406539071630"
      }
    )
  }

  render() {
    return (
        <div className="App">
          <UserList className='userList'/>
          <UserBracket className='userBracket'/>
        </div>
    );
  }
}

export default App;
