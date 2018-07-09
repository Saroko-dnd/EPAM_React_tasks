import { call, put, takeEvery, select, fork } from 'redux-saga/effects';

import actions from '../actions';
import createUuidv4 from '../utils/createUuidv4';
import selectors from '../selectors';
import { api, actionTypes } from '../constants';

const fetchNewsData = async (apiRequestLink) => {
    const response = await fetch(apiRequestLink);

    return response.json();
};

function* loadRelatedNews(action) {
    const articles = yield select(selectors.getArticles);
    const selectedArticle = articles.find(article => article.id === action.payload);
    const relatedNewsUrl = `${api.apiAnyNewsLink}q=${
        selectedArticle.title
    }&sortBy=relevancy&pageSize=30&apiKey=${api.apiToken}`;

    yield put(actions.selectNewArticle(selectedArticle));

    yield fork(
        loadNews,
        actions.loadNews(relatedNewsUrl, actionTypes.RELATED_NEWS_DOWNLOADED),
    );
}

function* loadNews(action) {
    const newsUploadedActionType = action.payload.uploadedActionType;
    let newsData = null;

    yield put(actions.newsIsLoading(true));

    newsData = yield call(fetchNewsData, [action.payload.apiLink]);

    newsData.articles.forEach((article) => {
        article.id = createUuidv4();
    });

    yield put(actions.newsIsLoading(false));

    if (newsUploadedActionType === actionTypes.TOP_NEWS_DOWNLOADED) {
        yield put(actions.newsDownloaded(newsData.articles));
    } else if (newsUploadedActionType === actionTypes.RELATED_NEWS_DOWNLOADED) {
        yield put(actions.relatedNewsDownloaded(newsData.articles));
    }
}

export default [
    takeEvery(actionTypes.LOAD_NEWS, loadNews),
    takeEvery(actionTypes.LOAD_RELATED_NEWS, loadRelatedNews),
];
