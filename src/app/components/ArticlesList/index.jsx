import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import './scss/index.scss';

const ArticlesList = ({ title, articles, className }) => {
    const arrayOfNews = articles.map(article => (
        <Article key={article.url} title={article.title} url={article.url} />
    ));

    return (
        <div className={`news-list ${className}`}>
            <h2 className="title">{title}</h2>
            {arrayOfNews}
        </div>
    );
};

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
};

ArticlesList.defaultProps = {
    className: '',
    title: '',
};

export default ArticlesList;
