import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Feedback!</h1>
          <p>Don't forget it!</p>
        </header>
        <Router>
          
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(App);
