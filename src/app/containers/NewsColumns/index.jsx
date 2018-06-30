import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import actions from '../../actions';
import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';
import './NewsColumns.scss';

/* eslint-disable react/prop-types */
class NewsColumns extends React.Component {
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
                <header className="loading-header d-flex flex-column align-items-center">
                    <RingLoader color={constants.colors.green} size={150} />
                    <h2 className="">Loading news...</h2>
                </header>
            </section>
        );
    }
}
/* eslint-enable react/prop-types */

const mapStateToProps = (state) => {
    const groupedArticles = [];
    let sliceStartIndex;
    let sliceEndIndex;

    if (state.articles.length) {
        for (let column = 0; column < 4; column += 1) {
            sliceStartIndex = 5 * column;
            sliceEndIndex = sliceStartIndex + 5;

            groupedArticles.push(<ArticlesList
                className="col-xl-3 col-lg-4 col-md-6"
                key={state.articles[sliceStartIndex].url}
                articles={state.articles.slice(
                    sliceStartIndex,
                    sliceEndIndex,
                )}
            />);
        }
    }

    return {
        columns: groupedArticles,
        dataUploaded: !state.newsIsLoading,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchNewsData: url => dispatch(actions.loadNews(url)),
});

NewsColumns.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
