import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

const Article = props => (
    <article className="news-article d-flex align-items-center flex-column">
        <h2>{props.title}</h2>
        <a href={props.linkToDetails}>read more</a>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    linkToDetails: PropTypes.string.isRequired,
};

export default Article;
