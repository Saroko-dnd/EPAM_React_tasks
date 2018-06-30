import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'bootstrap/scss/bootstrap.scss';

import './assets/scss/index.scss';

import App from './app';
import reducers from './app/reducers';
import constants from './app/constants';

const store = createStore(
    combineReducers(reducers),
    constants.initialState,
    applyMiddleware(thunk),
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('react-app'),
);
