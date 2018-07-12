import React from 'react';
import { createSelector } from 'reselect';

import DetailedArticle from '../components/DetailedArticle';

export const getArticles = state => state.articles;

export const getDetailedArticles = createSelector([getArticles], articles =>
    articles.map(foundArticle => (
        <DetailedArticle article={foundArticle} key={foundArticle.url} />
    )));
