import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import NewsColumns from '../NewsColumns';
import SelectedArticle from '../SelectedArticle';
import constants from '../../constants';

const RouteContentContainer = ({ className }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <main className={`${className} container-fluid`}>
                    <NewsColumns
                        newsApiLink={constants.apiTopNewsLink}
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
        <Route
            exact
            path="/details/:top_news_id"
            component={SelectedArticle}
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
