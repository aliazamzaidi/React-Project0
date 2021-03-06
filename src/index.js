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
import Table from './Table'

ReactDOM.render(
            <Router history={browserHistory}>
               <Route path="/" component={Main} >
               <IndexRoute component={SignInCard} />
               <Route path='/signin' component={SignInCard}></Route>
               <Route path='/signup' component={SignUpCard}></Route>
               <Route path='/dashboard' component={Dashboard}></Route>
               <Route path='/table' component={Table}></Route>
               </Route>
            </Router>,
  document.getElementById('root')
);
