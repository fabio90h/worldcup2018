import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import UserBracket from './components/UserBracket';
import UserList from './components/UserList';
import Comment from './components/Comments';

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
          <div id='header'><span>World Cup 2018</span></div>
          <div className='userDiv'>
            <div id='userList'>
              <UserList/>
            </div>
            <div id='userBracket'>
              <UserBracket/>
            </div>
          </div>
          {/* <div id='messicrying'></div> */}
          <Comment/>
        </div>
    );
  }
}

export default App;
