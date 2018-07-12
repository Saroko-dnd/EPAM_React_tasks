import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

import ArticlesList from '../../components/ArticlesList';
import { customPropsTypes } from '../../constants';

class DetailedNewsArticles extends React.Component {
    componentDidMount() {
        const { newsApiToken, newsApiLink } = this.props;
        const newsApiRequestLink = `${newsApiLink}country=us&apiKey=${newsApiToken}`;

        this.props.loadNews(newsApiRequestLink);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.detailedArticles.length === 0 &&
            this.props.detailedArticles.length > 0
        ) {
            this.props.loadRelatedNews(0);
        }
    }

    render() {
        this.finishedRendering = true;
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

DetailedNewsArticles.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
    loadNews: PropTypes.func.isRequired,
    relatedArticles: PropTypes.arrayOf(customPropsTypes.article),
    loadRelatedNews: PropTypes.func.isRequired,
    detailedArticles: PropTypes.arrayOf(PropTypes.element),
};

DetailedNewsArticles.defaultProps = {
    relatedArticles: [],
    detailedArticles: [],
};

export default DetailedNewsArticles;
