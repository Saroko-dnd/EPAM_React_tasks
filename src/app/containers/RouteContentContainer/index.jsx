import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import NewsColumns from '../NewsColumns';
import SelectedArticle from '../SelectedArticle';
import { api } from '../../constants';

const RouteContentContainer = ({ className }) => (
    <main>
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <div className={`${className} container-fluid`}>
                        <NewsColumns
                            newsApiLink={api.apiTopNewsLink}
                            newsApiToken={api.apiToken}
                        />
                    </div>
                )}
            />
            <Route exact path="/details" component={SelectedArticle} />
            <Route exact path="/second" render={() => <h1>Route 3</h1>} />
            <Route exact path="/third" render={() => <h1>Route 4</h1>} />
        </Switch>
    </main>
);

RouteContentContainer.propTypes = {
    className: PropTypes.string,
};

RouteContentContainer.defaultProps = {
    className: '',
};

export default RouteContentContainer;
