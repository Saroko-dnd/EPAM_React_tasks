import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import NewsColumns from './NewsColumns';
import actions from '../../actions';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';

function createColumnsFromNews(articles) {
    const groupedArticles = _.chunk(articles, 5);

    return groupedArticles.map(foundArticles => (
        <ArticlesList
            className="col-xl-3 col-lg-4 col-md-6"
            key={foundArticles[0].url}
            articles={foundArticles}
        />
    ));
}

const mapStateToProps = state => ({
    columns: createColumnsFromNews(state.articles),
    dataUploaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchNewsData: url =>
        dispatch(actions.loadNews(url, constants.actions.TOP_NEWS_UPLOADED)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
