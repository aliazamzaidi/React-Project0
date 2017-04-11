import React from 'react';
import * as firebase from 'firebase'
import Doner from './Doner';
import Needer from './Needer'
class Dashboard extends React.Component{
  constructor(props){
    super(props);
      this.state = ({
        loginEmailFromFB: 'none'
      })
  }
  componentDidMount(){
    var userId= firebase.auth().currentUser.email;
    this.setState({
      loginEmailFromFB: userId
    })
  }
  render(){
    return (
      <div>
        <h3>{`HI ${this.state.loginEmailFromFB.split('@')[0]}`}</h3>
        <div className='row'>
          <div className='col s6'>
            <Doner></Doner>
          </div>
          <div className='col s6'>
            <Needer></Needer>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;