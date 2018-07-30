import { call, put, select, fork } from 'redux-saga/effects';

import actions from '../actions';
import { getArticles } from '../selectors';
import { actionTypes, api } from '../constants';
import { __GetDependency__ } from './fetchingNews';

describe('Sagas', () => {
    describe('loadNews', () => {
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

    describe('loadRelatedNews', () => {
        const testAction = {
            type: actionTypes.LOAD_RELATED_NEWS,
            payload: 3,
        };
        const loadRelatedNews = __GetDependency__('loadRelatedNews');
        const loadNews = __GetDependency__('loadNews');
        const testArticles = [
            { title: 'article_0' },
            { title: 'article_1' },
            { title: 'article_2' },
            { title: 'article_3' },
            { title: 'article_4' },
            { title: 'article_5' },
        ];
        const testSelectedArticle = testArticles[testAction.payload];
        const sagaGenerator = loadRelatedNews(testAction);

        it('should select all articles from app state', () => {
            expect(sagaGenerator.next().value).toEqual(select(getArticles));
        });

        it('should save selected article in app state', () => {
            expect(sagaGenerator.next(testArticles).value).toEqual(put(actions.selectNewArticle(testSelectedArticle)));
        });

        it('should save selected article index in app state', () => {
            expect(sagaGenerator.next(testArticles).value).toEqual(put(actions.selectNewArticleIndex(testAction.payload)));
        });

        it('should use loadNews saga function in order to actually download related news', () => {
            expect(sagaGenerator.next(testArticles).value).toEqual(fork(
                loadNews,
                actions.loadNews(
                    `${api.apiAnyNewsLink}q=${
                        testSelectedArticle.title
                    }&sortBy=relevancy&pageSize=30&apiKey=${api.apiToken}`,
                    actionTypes.RELATED_NEWS_DOWNLOADED,
                ),
            ));
        });
    });
});
