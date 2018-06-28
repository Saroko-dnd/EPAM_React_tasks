import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

const Article = ({ title, linkToDetails }) => (
    <article className="news-article d-flex align-items-center flex-column">
        <h2>{title}</h2>
        <a href={linkToDetails}>read more</a>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    linkToDetails: PropTypes.string.isRequired,
};

export default Article;
