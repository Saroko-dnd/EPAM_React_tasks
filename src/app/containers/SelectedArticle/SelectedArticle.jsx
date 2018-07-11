import React from 'react';
import PropTypes from 'prop-types';

import DetailedArticle from '../../components/DetailedArticle';
import ArticlesList from '../../components/ArticlesList';
import { customPropsTypes } from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        this.props.loadRelatedNews();
    }

    render() {
        return (
            <section className="d-flex align-items-center justify-content-center flex-column">
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
    loadRelatedNews: PropTypes.func.isRequired,
    selectedArticle: customPropsTypes.article,
    relatedArticles: PropTypes.arrayOf(customPropsTypes.article),
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
