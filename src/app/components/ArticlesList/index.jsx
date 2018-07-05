import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import './scss/index.scss';

const ArticlesList = ({ articles, className }) => {
    const arrayOfNews = articles.map(article => (
        <Article
            key={article.url}
            title={article.title}
            articleId={article.id}
        />
    ));

    return <div className={`news-list ${className}`}>{arrayOfNews}</div>;
};

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

ArticlesList.defaultProps = {
    className: '',
};

export default ArticlesList;
