import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const result = (state = {}, action) => {
    if (action.type === 'UPDATE_FEEDBACK') {
        // return object of objects with property names: feeling, understanding, support, comments
        return {...state, [action.propertyName]: action.payload }
    } else if (action.type === 'RESET_FEEDBACK') {
        // return property names as empty strings
        return action.payload;
    }
    return state;
}

const history = (state = [], action) => {
    if (action.type === 'FEEDBACK_HISTORY') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore( 
    combineReducers({
        result,
        history,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
