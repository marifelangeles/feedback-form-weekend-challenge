import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Understanding extends Component {
    state = {
        input: '',
    }

    handleClick = () => {
        console.log('/understanding next clicked');
        // dispatch understanding input
        let action = { type: 'SET_UNDERSTANDING', payload: this.state.input }
        this.props.dispatch(action);
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div>
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
            <Review understanding={this.state.input}/>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Understanding);