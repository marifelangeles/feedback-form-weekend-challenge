import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';
class Comments extends Component {
    
    handleClick = () => {
        console.log('/comments next clicked');
        this.props.history.push('/review');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        let action = { type: 'UPDATE_FEEDBACK', payload: event.target.value, propertyName: 'comments' }
        this.props.dispatch(action);

    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <div onChange={this.handleChange}>
                    <input type="text" placeholder="Leave comments here" />
                    <button onClick={this.handleClick}>Next</button>
                </div>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Comments);
