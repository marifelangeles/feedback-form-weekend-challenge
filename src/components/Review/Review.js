import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {


    handleClick = () => {
        console.log('/review submit clicked');
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <ul>
                    <li>Feelings: {this.props.feelings}</li>
                    <li>Comprehension: {this.props.understanding}</li>
                    <li>Support: {this.props.support}</li>
                    <li>Comments: 0</li>
                </ul>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
