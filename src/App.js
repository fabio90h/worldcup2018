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
          <div id='header'><div id='messicrying'><div></div></div><span>World Cup 2018</span></div>
          <div>
            <ul id='pointSystem'>
              <h3>Points System</h3>
                <li><strong>Round of 16:</strong> +2 (32 possible points)</li>
                <li><strong>Quarterfinal:</strong> +3 (24 possible points)</li>
                <li><strong>Semifinal:</strong> +8 (32 possible points)</li>
                <li><strong>Final:</strong> +15 (30 possible points)</li>
                <li><strong>Champion:</strong> +30 (30 possible points)</li>
                <li><strong>3rd Place:</strong> +5 (5 possible points)</li>
            </ul>
          </div>
          <div className='userDiv'>
            <div id='userList'>
              <UserList/>
            </div>
            <div id='userBracket'>
              <UserBracket/>
            </div>
          </div>
          <Comment/>
        </div>
    );
  }
}

export default App;
