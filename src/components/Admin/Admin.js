import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                Admin
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
