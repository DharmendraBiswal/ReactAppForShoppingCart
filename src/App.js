import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from  'react-router-dom';
import HomePage from './components/HomePage';
import CreateUser from './components/CreateUser';
import Users from './components/Users';
import Profile from './components/Profile';
import Login from './components/Login';
import MenProducts from './components/MenProducts';
import WomenProducts from './components/WomenProducts';
import KidsProducts from './components/KidsProducts';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="wraper">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signUp' component={CreateUser} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/men' component={MenProducts} />
            <Route exact path='/women' component={WomenProducts} />
            <Route exact path='/kids' component={KidsProducts} />
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
