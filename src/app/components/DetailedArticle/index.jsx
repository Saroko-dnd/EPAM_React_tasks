import React from 'react';

import { customPropsTypes } from '../../constants';

import './scss/DetailedArticle.scss';

const DetailedArticle = ({ article }) => (
    <article
        className="detailed-news-article d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundImage: `url(${article.urlToImage})` }}
    >
        <div className="news-content">
            <h2 className="title">{article.title}</h2>
            <div className="horizontal-line d-none d-sm-block" />
            <p className="description d-none d-sm-block">
                {article.description}
            </p>
        </div>
        <div className="place-holder" />
        <a className="url" href={article.url}>
            read source
        </a>
        <footer className="d-flex align-items-center">
            <p>{new Date(Date.parse(article.publishedAt)).toDateString()}</p>
            <span>{article.source.name}</span>
            <p className="d-none d-sm-block">{article.author}</p>
        </footer>
    </article>
);

DetailedArticle.propTypes = {
    article: customPropsTypes.article,
};

DetailedArticle.defaultProps = {
    article: {
        source: { name: '' },
        title: '',
        author: '',
        description: '',
        urlToImage: '',
        publishedAt: '',
        url: '',
    },
};

export default DetailedArticle;
