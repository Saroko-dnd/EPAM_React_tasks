import React from 'react';
import PropTypes from 'prop-types';

import './scss/Article.scss';

const Article = ({ title, url, imgUrl }) => {
    const clippedTitle = title.length > 60 ? `${title.slice(0, 61)}...` : title;

    return (
        <article className="card news-article">
            {imgUrl ? (
                <img className="card-img-top" src={imgUrl} alt=":(" />
            ) : (
                <span className="fa fa-newspaper-o" />
            )}
            <div className="card-body d-flex align-items-center justify-content-end flex-column">
                <h2 className=" card-title">{clippedTitle}</h2>
                <a href={url} className="card-link">
                    read source
                </a>
            </div>
        </article>
    );
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imgUrl: PropTypes.string,
};

Article.defaultProps = {
    url: null,
    imgUrl: '',
};

export default Article;
