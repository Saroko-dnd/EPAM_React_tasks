import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../../components/LoadingIndicator';

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
                    {this.props.columns}
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
    columns: PropTypes.arrayOf(PropTypes.element),
    dataDownloaded: PropTypes.bool,
    loadNews: PropTypes.func.isRequired,
};

NewsColumns.defaultProps = {
    dataDownloaded: false,
    columns: [],
};

export default NewsColumns;
