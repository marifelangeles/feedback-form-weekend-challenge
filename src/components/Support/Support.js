import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Support extends Component {
    handleClick = () => {
        console.log('next clicked');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <div>
                    <label>
                        <input type="radio" name="feelings" value="1" />1
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
                    <button>Next</button>
                </div>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Support);
