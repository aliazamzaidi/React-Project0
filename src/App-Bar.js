import React from 'react';
import { Link } from 'react-router'
// import SignInCard from './SignIn'
// import SignUpCard from './SignUp'

class MainBar extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (<nav>
    <div className="nav-wrapper red lighten-1">
      <a href="#" className="brand-logo">Blood Bank App</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">  
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Login</Link></li>
        {/*<li><a href="collapsible.html">JavaScript</a></li>*/}
      </ul>
    </div>
  </nav>)
  }
}

export default MainBar;