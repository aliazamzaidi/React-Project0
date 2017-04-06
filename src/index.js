import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import MainBar from './App-Bar'
import SignInCard from './SignIn'
import Main from './main'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SignUpCard from './SignUp';
import Dashboard from './Dashboard';

ReactDOM.render(
            <Router history={browserHistory}>
               <Route path="/" component={Main} >
               <IndexRoute component={SignInCard} />
               <Route path='/signin' component={SignInCard}></Route>
               <Route path='/signup' component={SignUpCard}></Route>
               <Route path='/Dashboard' component={Dashboard}></Route>
               </Route>
            </Router>,
  document.getElementById('root')
);
