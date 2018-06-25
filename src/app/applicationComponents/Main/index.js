import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsList from '../../reusableComponents/NewsList';
import newsAppConfig from '../../configFiles/newsAppConfig';

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <main
                            className={`${
                                this.props.className
                            } container-fluid`}
                        >
                            <section className="row">
                                <NewsList
                                    className="col-xl-3 col-lg-4 col-md-6"
                                    newsApiLink={`${
                                        newsAppConfig.apiBaseLink
                                    }top-headlines?country=us&pageSize=5&page=1&apiKey=${
                                        newsAppConfig.apiToken
                                    }`}
                                />
                                <NewsList
                                    className="col-xl-3 col-lg-4 col-md-6"
                                    newsApiLink={`${
                                        newsAppConfig.apiBaseLink
                                    }top-headlines?country=us&pageSize=5&page=2&apiKey=${
                                        newsAppConfig.apiToken
                                    }`}
                                />
                                <NewsList
                                    className="col-xl-3 col-lg-4 col-md-6"
                                    newsApiLink={`${
                                        newsAppConfig.apiBaseLink
                                    }top-headlines?country=us&pageSize=5&page=3&apiKey=${
                                        newsAppConfig.apiToken
                                    }`}
                                />
                                <NewsList
                                    className="col-xl-3 col-lg-4 col-md-6"
                                    newsApiLink={`${
                                        newsAppConfig.apiBaseLink
                                    }top-headlines?country=us&pageSize=5&page=4&apiKey=${
                                        newsAppConfig.apiToken
                                    }`}
                                />
                            </section>
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
    }
}

export default Main;
