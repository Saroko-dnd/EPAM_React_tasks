import _ from 'lodash';
import { createSelector } from 'reselect';

const getRelatedArticles = state => state.articlesRelatedToSelected;
const getUniqueRelatedArticles = createSelector(
    [getRelatedArticles],
    relatedArticles => _.uniqBy(relatedArticles, article => article.title),
);

export default getUniqueRelatedArticles;
