import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success'



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
            <Route exact path='/understanding' component={Understanding} />
            <Route exact path='/support' component={Support}/>
            <Route exact path='/comments' component={Comments} />
            <Route exact path='/review' component={Review} />
            <Route exact path='/success' component={Success} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(App);
