import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
    
    state = {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
    }
    saveFeedback = () => {
        console.log('in saveFeedback');
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.result
        }).then( result => {
            console.log('back from POST', result);
            // clear redux state
            this.resetFeedback();
        }).catch(error => {
            console.log('error with POST /feedback', error);
            alert('error with POST /feedback');
        })
    }

    resetFeedback = () => {
        console.log('reseting feedback');
        let action = { type: 'RESET_FEEDBACK', payload: this.state}
        this.props.dispatch(action);
    }

    handleClick = () => {
        console.log('/review submit clicked');
        this.saveFeedback();
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <ul>
                    {JSON.stringify(this.props.reduxState)}
                    <li>Feelings: {this.props.reduxState.result.feeling}</li>
                    <li>Comprehension: {this.props.reduxState.result.understanding}</li>
                    <li>Support: {this.props.reduxState.result.support}</li>
                    <li>Comments: {this.props.reduxState.result.comments}</li>
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
