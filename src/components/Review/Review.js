import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        console.log('in getFeedback');
        axios({
            method: 'GET',
            url: '/feedback'
        }).then( response => {
            // response.data is an array with object 
            console.log('response from GET', response.data);
        }).catch(error => {
            console.log('error with GET /feedback', error);
            alert('error with GET /feedback');
        })
    }
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
