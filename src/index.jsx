import React from 'react';
// import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {
    connectRouter,
    routerMiddleware,
    ConnectedRouter,
} from 'connected-react-router';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/index.scss';

import App from './app/App';
import reducers from './app/reducers';
import { initialState } from './app/constants';
import sagaListeners from './app/sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    initialState,
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(sagaListeners);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-app'),
);
