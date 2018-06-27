import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import createUuidv4 from '../../helpers/createUuidv4';

import './scss/index.scss';

class NewsList extends React.Component {
    state = {
        dataLoaded: false,
    };

    componentDidMount() {
        fetch(this.props.newsApiLink)
            .then(response => response.json())
            .then((newsInfo) => {
                this.arrayOfNews = newsInfo.articles.map(article => (
                    <Article
                        key={createUuidv4()}
                        title={article.title}
                        linkToDetails={article.url}
                    />
                ));

                this.setState({ dataLoaded: true });
            });
    }

    render() {
        if (this.state.dataLoaded) {
            return (
                <div className={`news-list ${this.props.className}`}>
                    {this.arrayOfNews}
                </div>
            );
        }
        return (
            <div className={`news-list ${this.props.className}`}>
                <h2>Loading news...</h2>
            </div>
        );
    }
}

NewsList.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    className: PropTypes.string,
};

NewsList.defaultProps = {
    className: '',
};

export default NewsList;
