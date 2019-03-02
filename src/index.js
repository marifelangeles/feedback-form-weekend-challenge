import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feelings = (state = [], action) => {
    console.log('feelings reducer hit');
    if (action.type === 'SET_FEELING') {
        console.log('SET_FEELING hit');
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore( 
    combineReducers({
        feelings,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
