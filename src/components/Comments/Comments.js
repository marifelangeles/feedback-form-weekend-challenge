import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Review from '../Review/Review';
class Comments extends Component {
    state = {
        input: '',
    }

    handleClick = () => {
        console.log('/comments next clicked');
        // dispatch comments input
        let action = { type: 'SET_COMMENTS', payload: this.state.input }
        this.props.dispatch(action);
        this.props.history.push('/review');
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
                <h2>Any comments you want to leave?</h2>
                <div onChange={this.handleChange}>
                    <input type="text" placeholder="Leave comments here" />
                    <button onClick={this.handleClick}>Next</button>
                </div>
                <Review comments={this.state.input}/>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}
export default connect(mapReduxStateToProps)(Comments);
