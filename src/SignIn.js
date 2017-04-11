import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
// import Dashboard from './Dashboard'



class SignInCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      loginPassword: '',
      loginEmailFromFB: ''
    }
    this.login = this.login.bind(this);
  }

  login(ev) {
    let a = this.state.loginPassword;
    console.log(a)
    ev.preventDefault();
    let loginUserName = this.refs.loginUserName.value;
    let loginPassword = this.refs.loginPassword.value;

    console.log("user had given credetials => login user Name " + loginUserName + " ---- login password " + loginPassword)

    //Firebase Coding
    firebase.auth().signInWithEmailAndPassword(loginUserName, loginPassword).then((user) => {
      console.log('login hogya');
      let userEmail = user.email;
      console.log(`userUID ${userEmail}`);
      //////
      var userId = firebase.auth().currentUser.uid;
       
        firebase.database().ref('users/' + userId).set({
          // username: name,
          email: userEmail,
          // profile_picture: imageUrl
        });
      //////
      browserHistory.push('/dashboard')
    })
  }

  render() {
    return (
      <div className='myCustomCard '>
        {/*{ console.log('State: ', this.state.loginUserName, this.state.loginPassword)}*/}
        <div className="card">
          <div className="card-content grey lighten-4">
            <p>Sign In</p>
          </div>
          <div className="card-content grey lighten-4">
            <input type="text" name="userName" placeholder='Enter User Name' label='User Name' ref='loginUserName'></input>
            <input type="password" name="userPassword" placeholder='Enter Password' ref='loginPassword'></input>
          </div>
          <div className="card-content grey lighten-4">
            <button className="btn waves-effect waves-light red" type="submit" name="action" onClick={this.login}>Login
  </button>
            <button className="btn waves-effect waves-light blue right">FB Login</button>
            {/*<Dashboard email={this.state.loginEmailFromFB}></Dashboard>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default SignInCard;
