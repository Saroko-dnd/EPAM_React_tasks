import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../../components/LoadingIndicator';
import ArticlesList from '../../components/ArticlesList';

class NewsColumns extends React.Component {
    componentDidMount() {
        const { newsApiToken, newsApiLink } = this.props;
        const newsApiRequestLink = `${newsApiLink}country=us&apiKey=${newsApiToken}`;
        this.props.loadNews(newsApiRequestLink);
    }

    render() {
        if (this.props.dataDownloaded) {
            return (
                <section className="news-columns row justify-content-center align-items-stretch">
                    {this.props.columns.map(foundArticles => (
                        <ArticlesList
                            className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-around"
                            key={foundArticles[0].url}
                            articles={foundArticles}
                            linksToDetails
                        />
                    ))}
                </section>
            );
        }

        return (
            <section className="news-columns">
                <LoadingIndicator message="Loading news..." />
            </section>
        );
    }
}

NewsColumns.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
    loadNews: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.element),
    dataDownloaded: PropTypes.bool,
};

NewsColumns.defaultProps = {
    dataDownloaded: false,
    columns: [],
};

export default NewsColumns;
