import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyC4MJ_T-h49FgSCI3pB10pLfrPxm0Vk6j4",
    authDomain: "react-bloodbank.firebaseapp.com",
    databaseURL: "https://react-bloodbank.firebaseio.com",
    storageBucket: "react-bloodbank.appspot.com",
    messagingSenderId: "815840941095"
  };
  firebase.initializeApp(config);

class SignUpCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUser: '',
      signUpEmail: '',
      signUpPassword: ''
    }
    console.log(this.state.signUpEmail);
    this.signUp = this.signUp.bind(this);

    // firebase coding
  //   var config = {
  //   apiKey: "AIzaSyC4MJ_T-h49FgSCI3pB10pLfrPxm0Vk6j4",
  //   authDomain: "react-bloodbank.firebaseapp.com",
  //   databaseURL: "https://react-bloodbank.firebaseio.com",
  //   storageBucket: "react-bloodbank.appspot.com",
  //   messagingSenderId: "815840941095"
  // };
  // firebase.initializeApp(config);
  }

  signUp(ev) {
    ev.preventDefault();
   let signUpUser = this.refs.signUpUser.value;
   let signUpEmail = this.refs.signUpEmail.value;
   let signUpPassword = this.refs.signUpPassword.value;
   console.log(signUpUser + " " + signUpEmail + " " + signUpPassword)

     
  
  ////////////
  firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword).then(()=>{
    console.log(signUpEmail, signUpPassword)
  })
  
  .catch(function(error) {
  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
  console.log('signup done')
});
  }

  render() {
    return (
      <div className='myCustomCard '>
        <div className="card">
          <div className="card-content grey lighten-4">
            <p>Sign Up</p>
          </div>
          <div className="card-content grey lighten-4">
            <input type="text" name="userName" placeholder='Enter User Name' label='User Name' ref='signUpUser'></input>
            <input type="text" name="Email" placeholder='Enter Email Id' ref='signUpEmail'></input>
            <input type="password" name="userPassword" placeholder='Enter Password' ref='signUpPassword'></input>
          </div>
          <div className="card-content grey lighten-4">
            <button className="btn waves-effect waves-light red" type="submit" name="action" onClick={this.signUp}>Signup
  </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpCard;
