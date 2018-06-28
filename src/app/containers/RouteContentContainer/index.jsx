import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NewsColumns from '../NewsColumns';
import constants from '../../constants';

const RouteContentContainer = props => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <main className={`${props.className} container-fluid`}>
                    <NewsColumns
                        newsApiLink={constants.apiBaseLink}
                        newsApiToken={constants.apiToken}
                    />
                </main>
            )}
        />
        <Route
            exact
            path="/first"
            render={() => (
                <main>
                    <h1>Route 2</h1>
                </main>
            )}
        />
        <Route
            exact
            path="/second"
            render={() => (
                <main>
                    <h1>Route 3</h1>
                </main>
            )}
        />
        <Route
            exact
            path="/third"
            render={() => (
                <main>
                    <h1>Route 4</h1>
                </main>
            )}
        />
    </Switch>
);

RouteContentContainer.propTypes = {
    className: PropTypes.string,
};

RouteContentContainer.defaultProps = {
    className: '',
};

export default RouteContentContainer;
