import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import HeaderForm from '../HeaderForm/HeaderForm';


class Understanding extends Component {
    

    handleClick = () => {
        console.log('/understanding next clicked');
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        let action = { type: 'UPDATE_FEEDBACK', payload: event.target.value, propertyName: 'understanding' }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <HeaderForm />
                <h2>How well are you understanding the content?</h2>
                <div onChange={this.handleChange}>
                    <label>
                        <input type="radio" name="understanding" value="1" />1
                    </label>
                    <label>
                        <input type="radio" name="understanding" value="2" />2
                    </label>
                    <label>
                        <input type="radio" name="understanding" value="3" />3
                    </label>
                    <label>
                        <input type="radio" name="understanding" value="4" />4
                    </label>
                    <label>
                        <input type="radio" name="understanding" value="5" />5
                    </label>
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

export default connect(mapReduxStateToProps)(Understanding);
