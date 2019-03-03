import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Feelings extends Component {

    

    handleClick = () => {
        console.log('/feelings next clicked');
        // dispatch feeling input
        // let action = {type: 'SET_FEELING', payload: this.state.input}
        // this.props.dispatch(action);
        // direct user to understanding form
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        // this.setState({
        //     input: event.target.value
        // });
        let action = { type: 'UPDATE_FEEDBACK', payload: event.target.value, propertyName: 'feeling'}
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
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
