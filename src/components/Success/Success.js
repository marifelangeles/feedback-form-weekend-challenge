import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        console.log('/review new feedback clicked');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div>
                    
                    <button onClick={this.handleClick}>Leave New Feedback</button>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Review);
