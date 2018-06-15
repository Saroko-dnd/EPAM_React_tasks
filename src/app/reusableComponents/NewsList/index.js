import React from 'react';

import Article from '../Article';

import createUuidv4 from '../../helpers/createUuidv4';

import './scss/index.scss';

class NewsList extends React.Component {
    state = {
        dataLoaded: false,
    };

    render() {
        return (
            <div className={`news-list ${this.props.className}`}>
                {this.arrayOfNews}
            </div>
        );
    }

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
}

export default NewsList;
