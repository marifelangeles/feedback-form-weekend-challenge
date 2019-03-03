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
                    {JSON.stringify(this.props.reduxState)}
                    <li>Feelings: {this.props.reduxState.feelings}</li>
                    <li>Comprehension: {this.props.reduxState.understanding}</li>
                    <li>Support: {this.props.reduxState.support}</li>
                    <li>Comments: {this.props.reduxState.comments}</li>
                </ul>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Review);
