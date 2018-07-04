import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ArticlesList from '../../components/ArticlesList';
import LoadingIndicator from '../../components/LoadingIndicator';

class NewsColumns extends React.Component {
    static createColumnsFromNews(articles) {
        const groupedArticles = _.chunk(articles, 5);
        const columns = [];

        for (let column = 0; column < groupedArticles.length; column += 1) {
            columns.push(<ArticlesList
                className="col-xl-3 col-lg-4 col-md-6"
                key={groupedArticles[column][0].url}
                articles={groupedArticles[column]}
            />);
        }

        return columns;
    }

    componentDidMount() {
        const { newsApiToken, newsApiLink } = this.props;
        const newsApiRequestLink = `${newsApiLink}top-headlines?country=us&apiKey=${newsApiToken}`;
        this.props.fetchNewsData(newsApiRequestLink);
    }

    render() {
        if (this.props.dataUploaded) {
            return (
                <section className="news-columns row">
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
    fetchNewsData: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.element),
    dataUploaded: PropTypes.bool,
};

NewsColumns.defaultProps = {
    dataUploaded: false,
    columns: [],
};

export default NewsColumns;
