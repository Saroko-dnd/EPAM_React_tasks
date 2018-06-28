import React from 'react';
import PropTypes from 'prop-types';

import Article from '../../components/Article';

import './scss/index.scss';

const ArticlesList = (props) => {
    const arrayOfNews = props.articles.map(article => (
        <Article
            key={article.url}
            title={article.title}
            linkToDetails={article.url}
        />
    ));

    return <div className={`news-list ${props.className}`}>{arrayOfNews}</div>;
};

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

ArticlesList.defaultProps = {
    className: '',
};

export default ArticlesList;
