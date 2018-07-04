import React from 'react';
import Thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {
    connectRouter,
    routerMiddleware,
    ConnectedRouter,
} from 'connected-react-router';

import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/index.scss';

import App from './app';
import reducers from './app/reducers';
import constants from './app/constants';

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    constants.initialState,
    compose(applyMiddleware(routerMiddleware(history), Thunk)),
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-app'),
);
