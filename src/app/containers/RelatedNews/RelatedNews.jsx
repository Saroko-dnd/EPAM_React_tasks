import React from 'react';
import PropTypes from 'prop-types';

import ArticlesList from '../../components/ArticlesList';
import { customPropsTypes } from '../../constants';

const RelatedNews = (props) => {
    console.log('RelatedNews');
    console.log(props.relatedArticles);

    return (
        <ArticlesList
            title="Related news"
            articles={props.relatedArticles}
            linksToDetails={false}
        />
    );
};

RelatedNews.propTypes = {
    relatedArticles: PropTypes.arrayOf(customPropsTypes.article),
};

RelatedNews.defaultProps = {
    relatedArticles: [],
};

export default RelatedNews;
