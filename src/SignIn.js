import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
// import {browserHistory} from 'react-router';



class SignInCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      loginPassword: ''
    }
    this.login = this.login.bind(this);
  }

 
  login(ev){
    ev.preventDefault();
    let loginUserName = this.refs.loginUserName.value;
    let loginPassword = this.refs.loginPassword.value;
    this.setState({
      loginUserName,
      loginPassword
    })
    console.log(this.state)
    console.log("user had given credetials => login user Name " + loginUserName + " ---- login password " + loginPassword)

    //Firebase Coding
    firebase.auth().signInWithEmailAndPassword(loginUserName,loginPassword).then((user)=>{
      console.log('login hogya')
    })
  }

  render() {
    return (
      <div className='myCustomCard '>
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
          </div>
        </div>
      </div>
    );
  }
}

export default SignInCard;
