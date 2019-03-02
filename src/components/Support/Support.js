import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {
    handleClick = () => {
        console.log('/support next clicked');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <div>
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

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Support);
