import React, { Component } from 'react';
import { connect } from 'react-redux';




class HeaderForm extends Component {
    render() {
        return (            
            <header>
                <h1>Feedback!</h1>
                <p>Don't forget it!</p>
            </header>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HeaderForm);
