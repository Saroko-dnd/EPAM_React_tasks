import _ from 'lodash';
import { createSelector } from 'reselect';

export const getRelatedArticles = state => state.articlesRelatedToSelected;
export const getUniqueRelatedArticles = createSelector(
    [getRelatedArticles],
    relatedArticles => _.uniqBy(relatedArticles, article => article.title),
);
