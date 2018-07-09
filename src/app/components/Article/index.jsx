import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { navigation } from '../../constants';

import './scss/Article.scss';

const Article = ({ title, articleId, url }) => {
    let detailsLink;
    let sourceLink;

    if (articleId) {
        detailsLink = (
            <NavLink to={navigation.newsDetails.destination + articleId} exact>
                read more
            </NavLink>
        );
    }

    if (url) {
        sourceLink = <a href={url}>read source</a>;
    }

    return (
        <article className="news-article d-flex align-items-center flex-column">
            <h2>{title}</h2>
            {detailsLink}
            {sourceLink}
        </article>
    );
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    articleId: PropTypes.string,
    url: PropTypes.string,
};

Article.defaultProps = {
    articleId: null,
    url: null,
};

export default Article;
