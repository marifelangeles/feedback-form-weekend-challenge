import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import HeaderForm from '../HeaderForm/HeaderForm';


class Support extends Component {
    

    handleClick = () => {
        console.log('/support next clicked');
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        console.log(event.target.value);
        let action = { type: 'UPDATE_FEEDBACK', payload: event.target.value, propertyName: 'support' }
        this.props.dispatch(action);

    }

    render() {
        return (
            <div>
                <HeaderForm />
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
            <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Support);
