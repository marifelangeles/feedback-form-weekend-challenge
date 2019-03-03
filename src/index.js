import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const result = (state = {}, action) => {
    if (action.type === 'UPDATE_FEEDBACK') {
        return {...state, [action.propertyName]: action.payload }
    } 
    return state;
}

const storeInstance = createStore( 
    combineReducers({
        result,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
