import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import NewsColumns from './NewsColumns';
import actions from '../../actions';
import ArticlesList from '../../components/ArticlesList';

const mapStateToProps = (state) => {
    const groupedArticles = _.chunk(state.articles, 5);
    const props = {
        columns: [],
        dataUploaded: !state.newsIsLoading,
    };

    for (let column = 0; column < groupedArticles.length; column += 1) {
        props.columns.push(<ArticlesList
            className="col-xl-3 col-lg-4 col-md-6"
            key={groupedArticles[column][0].url}
            articles={groupedArticles[column]}
        />);
    }

    return props;
};

const mapDispatchToProps = dispatch => ({
    fetchNewsData: url => dispatch(actions.loadNews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
