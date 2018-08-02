import { call, put, takeEvery, select, fork } from 'redux-saga/effects';

import actions from '../actions';
import { getArticles } from '../selectors';
import { api, actionTypes } from '../constants';

const fetchNewsData = async (apiRequestLink) => {
    const response = await fetch(apiRequestLink);

    return response.json();
};

function* loadRelatedNews(action) {
    const articles = yield select(getArticles);
    const selectedArticle = articles[action.payload];
    const relatedNewsUrl = `${api.apiAnyNewsLink}q=${
        selectedArticle.title
    }&sortBy=relevancy&pageSize=30&apiKey=${api.apiToken}`;

    yield put(actions.selectNewArticle(selectedArticle));
    yield put(actions.selectNewArticleIndex(action.payload));

    yield fork(
        loadNews,
        actions.loadNews(relatedNewsUrl, actionTypes.RELATED_NEWS_DOWNLOADED),
    );
}

function* loadNews(action) {
    const newsDownloadedActionType = action.payload.downloadedActionType;
    let newsData = null;

    yield put(actions.newsIsLoading(true));

    newsData = yield call(fetchNewsData, [action.payload.apiLink]);

    yield put(actions.newsIsLoading(false));

    if (newsDownloadedActionType === actionTypes.TOP_NEWS_DOWNLOADED) {
        yield put(actions.newsDownloaded(newsData.articles));
    } else if (
        newsDownloadedActionType === actionTypes.RELATED_NEWS_DOWNLOADED
    ) {
        yield put(actions.relatedNewsDownloaded(newsData.articles));
    }
}

export default [
    takeEvery(actionTypes.LOAD_NEWS, loadNews),
    takeEvery(actionTypes.LOAD_RELATED_NEWS, loadRelatedNews),
];
