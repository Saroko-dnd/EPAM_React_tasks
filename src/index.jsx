import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/scss/bootstrap.scss';

import './assets/scss/index.scss';
import App from './app/App';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('react-app'),
);
