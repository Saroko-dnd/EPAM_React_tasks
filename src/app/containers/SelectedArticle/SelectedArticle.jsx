import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

import ArticlesList from '../../components/ArticlesList';
import { customPropsTypes } from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        this.props.loadRelatedNews(0);
    }

    render() {
        this.finishedRendering = true;
        console.log('Carousel render');
        return (
            <section className="d-flex align-items-center justify-content-center flex-column">
                <Carousel
                    onChange={(index) => {
                        this.props.loadRelatedNews(index);
                    }}
                    elements={this.props.detailedArticles}
                />
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
    relatedArticles: PropTypes.arrayOf(customPropsTypes.article),
    loadRelatedNews: PropTypes.func.isRequired,
    detailedArticles: PropTypes.arrayOf(PropTypes.element).isRequired,
};

SelectedArticle.defaultProps = {
    relatedArticles: [],
};

export default SelectedArticle;
