import React from 'react';
import { connect } from 'react-redux';

import NewsColumns from './NewsColumns';
import actions from '../../actions';
import ArticlesList from '../../components/ArticlesList';

const mapStateToProps = (state) => {
    const groupedArticles = [];
    let sliceStartIndex;
    let sliceEndIndex;

    if (state.articles.length) {
        for (let column = 0; column < 4; column += 1) {
            sliceStartIndex = 5 * column;
            sliceEndIndex = sliceStartIndex + 5;

            groupedArticles.push(<ArticlesList
                className="col-xl-3 col-lg-4 col-md-6"
                key={state.articles[sliceStartIndex].url}
                articles={state.articles.slice(
                    sliceStartIndex,
                    sliceEndIndex,
                )}
            />);
        }
    }

    return {
        columns: groupedArticles,
        dataUploaded: !state.newsIsLoading,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNewsData: url => dispatch(actions.loadNews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
