import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {
    state = {
        input: '',
    }

    handleClick = () => {
        console.log('/support next clicked');
        // dispatch understanding input
        let action = { type: 'SET_SUPPORT', payload: this.state.input }
        this.props.dispatch(action);
        this.props.history.push('/comments');
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
                <h2>How well are you being supported?</h2>
                <div onChange={this.handleChange}>
                    <label>
                        <input type="radio" name="support" value="1" />1
                    </label>
                    <label>
                        <input type="radio" name="support" value="2" />2
                    </label>
                    <label>
                        <input type="radio" name="support" value="3" />3
                    </label>
                    <label>
                        <input type="radio" name="support" value="4" />4
                    </label>
                    <label>
                        <input type="radio" name="support" value="5" />5
                    </label>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            <Review support={this.state.input}/>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Support);
