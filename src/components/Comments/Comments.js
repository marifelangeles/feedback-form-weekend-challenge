import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import HeaderForm from '../HeaderForm/HeaderForm';

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
                <HeaderForm />
                <h2>Any comments you want to leave?</h2>
                <div>
                    <input type="text" placeholder="Leave comments here" value={this.props.reduxState.result.comments} onChange={this.handleChange}/>
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
