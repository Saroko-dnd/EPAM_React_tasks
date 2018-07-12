import React from 'react';
import PropTypes from 'prop-types';

import './scss/Article.scss';

const Article = ({ title, url }) => (
    <article className="news-article d-flex align-items-center flex-column">
        <h2>{title}</h2>
        <a href={url}>read source</a>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
};

Article.defaultProps = {
    url: null,
};

export default Article;
