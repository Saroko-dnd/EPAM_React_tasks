import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import actions from '../../actions';
import NewsColumns from './NewsColumns';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';

function createColumnsFromNews(articles) {
    const groupedArticles = _.chunk(articles, 5);

    return groupedArticles.map(foundArticles => (
        <ArticlesList
            className="col-xl-3 col-lg-4 col-md-6"
            key={foundArticles[0].url}
            articles={foundArticles}
            linksToDetails
        />
    ));
}

const mapStateToProps = state => ({
    columns: createColumnsFromNews(state.articles),
    dataUploaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    loadNews: apiUrl =>
        dispatch(actions.loadNews(apiUrl, constants.actions.TOP_NEWS_UPLOADED)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
