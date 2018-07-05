import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import constants from '../../constants';

import './scss/Article.scss';

const Article = ({ title, articleId }) => (
    <article className="news-article d-flex align-items-center flex-column">
        <h2>{title}</h2>
        <NavLink
            to={constants.navigation.newsDetails.destination + articleId}
            exact
        >
            read more
        </NavLink>
    </article>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    articleId: PropTypes.string.isRequired,
};

export default Article;
