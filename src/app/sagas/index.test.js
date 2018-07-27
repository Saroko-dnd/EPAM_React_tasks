import { call, put } from 'redux-saga/effects';

import actions from '../actions';
import { actionTypes } from '../constants';
import { __GetDependency__ } from './fetchingNews';

describe('Sagas', () => {
    describe('loadRelatedNews', () => {
        const responseWithNewsArticles = { articles: [] };
        const testAction = {
            type: actionTypes.LOAD_NEWS,
            payload: {
                downloadedActionType: actionTypes.TOP_NEWS_DOWNLOADED,
                apiLink: '/api/news/latest',
            },
        };
        const loadNews = __GetDependency__('loadNews');
        const fetchNewsData = __GetDependency__('fetchNewsData');
        let sagaGenerator = loadNews(testAction);

        it('should notify the application that the download began', () => {
            expect(sagaGenerator.next().value).toEqual(put(actions.newsIsLoading(true)));
        });

        it('should fetch news using provided in action payload api url', () => {
            expect(sagaGenerator.next().value).toEqual(call(fetchNewsData, [testAction.payload.apiLink]));
        });

        it('should notify the application that the download is complete', () => {
            expect(sagaGenerator.next(responseWithNewsArticles).value).toEqual(put(actions.newsIsLoading(false)));
        });

        it('should save downloaded top news articles to property "articles" in app state', () => {
            expect(sagaGenerator.next().value).toEqual(put(actions.newsDownloaded(responseWithNewsArticles.articles)));
        });

        it('should save downloaded related news articles to property "articlesRelatedToSelected" in app state', () => {
            testAction.payload.downloadedActionType =
                actionTypes.RELATED_NEWS_DOWNLOADED;
            sagaGenerator = loadNews(testAction);

            sagaGenerator.next();
            sagaGenerator.next();
            sagaGenerator.next(responseWithNewsArticles);
            expect(sagaGenerator.next().value).toEqual(put(actions.relatedNewsDownloaded(responseWithNewsArticles.articles)));
        });
    });
});
