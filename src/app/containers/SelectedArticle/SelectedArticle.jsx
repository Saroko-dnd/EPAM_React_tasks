import React from 'react';
import PropTypes from 'prop-types';

import DetailedArticle from '../../components/DetailedArticle';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        this.props.selectArticle();
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
