import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import HeaderForm from '../HeaderForm/HeaderForm';


class Feelings extends Component {

    

    handleClick = () => {
        console.log('/feelings next clicked');
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        let action = { type: 'UPDATE_FEEDBACK', payload: event.target.value, propertyName: 'feeling'}
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <HeaderForm />
                <h2>How are you feeling today?</h2>
                <div onChange={this.handleChange} >
                    <label>
                        <input type="radio" name="feelings" value="1"/>1
                    </label>
                    <label>
                        <input type="radio" name="feelings" value="2" />2
                    </label>
                    <label>
                        <input type="radio" name="feelings" value="3" />3
                    </label>
                    <label>
                        <input type="radio" name="feelings" value="4" />4
                    </label>
                    <label>
                        <input type="radio" name="feelings" value="5" />5
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

export default connect(mapReduxStateToProps)(Feelings);
