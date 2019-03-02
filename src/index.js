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

const understanding = (state = [], action) => {
    console.log('understanding reducer hit');
    if (action.type === 'SET_UNDERSTANDING') {
        console.log('SET_UNDERSTANDING hit');
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const support = (state = [], action) => {
    console.log('support reducer hit');
    if (action.type === 'SET_SUPPORT') {
        console.log('SET_SUPPORT hit');
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const comments = (state = [], action) => {
    console.log('comments reducer hit');
    if (action.type === 'SET_COMMENTS') {
        console.log('SET_COMMENTS hit');
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore( 
    combineReducers({
        feelings,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
