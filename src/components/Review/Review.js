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

    handleClick = () => {
        console.log('/review submit clicked');
        // on submit, post current survey values to server
        this.saveFeedback();
        this.props.history.push('/success');
    }

    saveFeedback = () => {
        console.log('in saveFeedback');
        // expect object result with sub objects of property names
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.result
        }).then( result => {
            console.log('back from POST', result);
            // clear survey results for new feedback
            this.resetFeedback();
        }).catch(error => {
            console.log('error with POST /feedback', error);
            alert('Missing information. Answer all questions.');
        })
    }

    resetFeedback = () => {
        console.log('reseting feedback');
        // reset current result values to empty string
        let action = { type: 'RESET_FEEDBACK', payload: this.state}
        this.props.dispatch(action);
    }

    

    render() {
        
        let button;
        // convert objects to array in order to loop through entries in form
        // https://zellwk.com/blog/looping-through-js-objects/
        let result = this.props.reduxState.result;
        console.log('result', result);
        let resultEntries = Object.values(result);
        console.log('resultEntries', resultEntries);
        // check if all entries are complete
        // if entry is incomplete, object will not be added to redux state

        for (const entry of resultEntries) {
            console.log('entry', entry);

            if (resultEntries.length === 4 && entry !== '') {
                button = <button onClick={this.handleClick}>Submit</button>
            } else {
                button = <button onClick={this.handleClick} disabled>Incomplete</button>
            }
        }

        
        

        return (
            <div>
                <h2>Review Your Feedback</h2>
                <ul>
                    {/* {JSON.stringify(this.props.reduxState)} */}
                    <li>Feelings: {this.props.reduxState.result.feeling}</li>
                    <li>Comprehension: {this.props.reduxState.result.understanding}</li>
                    <li>Support: {this.props.reduxState.result.support}</li>
                    <li>Comments: {this.props.reduxState.result.comments}</li>
                </ul>
                {button}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Review);
