import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import Feelings from '../Feelings/Feelings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Feedback!</h1>
          <p>Don't forget it!</p>
        </header>
        
        <Router>
          <div>
            <Route exact path='/' component={Feelings}/>
            <Route exact path='/comprehension' />
            <Route exact path='/support' />
            <Route exact path='/comments' />
          </div>
        </Router>
        <div>
          <h2>Review Your Feedback</h2>
          <ul>
            <li>Feelings: 0</li>
            <li>Comprehension: 0</li>
            <li>Support: 0</li>
            <li>Comments: 0</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(App);
