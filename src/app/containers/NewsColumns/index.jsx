import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import actions from '../../actions';
import NewsColumns from './NewsColumns';
import ArticlesList from '../../components/ArticlesList';
import { actionTypes } from '../../constants';

function createColumnsFromNews(articles) {
    const groupedArticles = _.chunk(articles, 5);

    return groupedArticles.map(foundArticles => (
        <ArticlesList
            className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-around"
            key={foundArticles[0].url}
            articles={foundArticles}
            linksToDetails
        />
    ));
}

const mapStateToProps = state => ({
    columns: createColumnsFromNews(state.articles),
    dataDownloaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    loadNews: apiUrl =>
        dispatch(actions.loadNews(apiUrl, actionTypes.TOP_NEWS_DOWNLOADED)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
