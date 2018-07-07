import React from 'react';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';

import DetailedArticle from '../../components/DetailedArticle';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        const { topNewsId } = this.props.match.params;
        const actionType = constants.actions.LOAD_RELATED_NEWS;

        this.props.dispatch(createAction(actionType)(topNewsId));
    }

    render() {
        return (
            <section>
                <DetailedArticle article={this.props.selectedArticle} />
                <ArticlesList
                    title="Related news"
                    articles={this.props.relatedArticles}
                    linksToDetails={false}
                />
            </section>
        );
    }
}

SelectedArticle.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            topNewsId: PropTypes.string.isRequired,
        }),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedArticle: constants.customPropTypes.article,
    relatedArticles: PropTypes.arrayOf(constants.customPropTypes.article),
};

SelectedArticle.defaultProps = {
    selectedArticle: {
        source: { name: '' },
        title: '',
        author: '',
        description: '',
        urlToImage: '',
        publishedAt: '',
        url: '',
    },
    relatedArticles: [],
};

export default SelectedArticle;
