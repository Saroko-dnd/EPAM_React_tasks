import React from 'react';
import PropTypes from 'prop-types';

import DetailedArticle from '../../components/DetailedArticle';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        this.lastLocationUrl = this.props.match.params.top_news_id;
        console.log('SelectedArticle did mount');
        this.props.selectArticle();
    }

    componentDidUpdate() {
        if (this.lastLocationUrl !== this.props.match.params.top_news_id) {
            this.props.selectArticle();
            this.lastLocationUrl = this.props.match.params.top_news_id;
        }
    }

    render() {
        return (
            <section>
                <DetailedArticle article={this.props.selectedArticle} />
                <ArticlesList
                    title="Related news"
                    articles={this.props.relatedArticles}
                />
            </section>
        );
    }
}

SelectedArticle.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            top_news_id: PropTypes.string,
        }).isRequired,
    }).isRequired,
    selectArticle: PropTypes.func.isRequired,
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
