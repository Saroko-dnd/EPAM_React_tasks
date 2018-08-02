import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

import ArticlesList from '../../components/ArticlesList';
import LoadingIndicator from '../../components/LoadingIndicator';
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
                {this.props.dataDownloaded ? (
                    <ArticlesList
                        title="Related news"
                        articles={this.props.relatedArticles}
                        linksToDetails={false}
                    />
                ) : (
                    <LoadingIndicator message="Loading related news..." />
                )}
            </section>
        );
    }
}

DetailedNewsArticles.propTypes = {
    loadRelatedNews: PropTypes.func.isRequired,
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
    loadNews: PropTypes.func.isRequired,
    dataDownloaded: PropTypes.bool,
    relatedArticles: PropTypes.arrayOf(customPropsTypes.article),
    detailedArticles: PropTypes.arrayOf(PropTypes.element),
};

DetailedNewsArticles.defaultProps = {
    dataDownloaded: false,
    relatedArticles: [],
    detailedArticles: [],
};

export default DetailedNewsArticles;
