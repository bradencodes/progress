import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./redux/store.js"
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken.js';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import './App.css';


import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import PrivateRoute from './components/private-route/PrivateRoute.js';
import Dashboard from './components/dashboard/Dashboard.js';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token of header auth
  const token = localStorage.jwtToken
  setAuthToken(token)

  // Decode token and get user info with expiration
  const decoded = jwt_decode(token)

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = "./login"
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
