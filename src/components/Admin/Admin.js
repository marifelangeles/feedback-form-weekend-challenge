import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>Feedback Results!</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>feeling</td>
                            <td>understanding</td>
                            <td>support</td>
                            <td>Feedback description</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
