import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

    componentDidMount() {
        this.getfeedback()
    }

    getfeedback = () => {
        console.log('in getfeedback');
        // get feedback entries from server
        axios({
            method: 'GET',
            url: '/feedback'
        }).then( response => {
            console.log('back from GET /feedback', response.data);
            // response.data will be an array of objects
            let action = { type: 'FEEDBACK_HISTORY', payload: response.data }
            this.props.dispatch(action);
        }).catch(error => {
            console.log('error with GET', error);
            alert('error with GET');
        })
    }

    handleDeleteClick = feedbackID => {
        console.log('in handleDeleteClick');
        console.log('feedbackID', feedbackID);
        
        axios({
            method: 'DELETE',
            url: `/feedback/` + feedbackID
        }).then(response => {
            console.log('back from DELETE /feedback', response);
            // display updated list after deleting feedback row
            this.getfeedback();
        }).catch(error => {
            console.log('error with DELETE', error);
            alert('error with DELETE');
        })        
    }

    // deleteFeedback = (feedbackID) => {
    //     console.log('in deleteFeedback');
    //     console.log('feedbackID', feedbackID);
        
        
    // }

    
    render() {
        return (
            <div>
                <header>
                    <h1>Feedback Results!</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.history.map( feedback => 
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments} description</td>
                                <td>
                                    <button onClick={ () => this.handleDeleteClick(feedback.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
