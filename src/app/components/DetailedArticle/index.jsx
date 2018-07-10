import React from 'react';

import { customPropsTypes } from '../../constants';

import './scss/DetailedArticle.scss';

const DetailedArticle = ({ article }) => (
    <article className="detailed-news-article d-flex align-items-center flex-column">
        <h2 className="title">{article.title}</h2>
        <img className="photo img-fluid" src={article.urlToImage} alt=":(" />
        <p className="description">{article.description}</p>
        <a className="url" href={article.url}>
            read source
        </a>
        <footer className="d-flex align-items-center flex-column">
            <p>{new Date(Date.parse(article.publishedAt)).toDateString()}</p>
            <span>{article.source.name}</span>
            <p>{article.author}</p>
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
