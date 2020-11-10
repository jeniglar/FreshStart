// import React, { Component } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CityResults from './pages/CityResults';
import CityScores from './components/ScoreCard';
import Survey from './components/Survey';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Route exact path="/" component={Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/survey" component={Survey} />
          <PrivateRoute exact path="/cityscores" component={CityScores} />
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute exact path="/CityResults" component={CityResults} />
          <PrivateRoute exact path="/Favorites" component={Favorites} />
        </Switch>

      </Router>
    </Provider>
  )};
export default App;
