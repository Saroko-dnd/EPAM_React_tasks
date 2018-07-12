import { call, put, takeEvery, select, fork } from 'redux-saga/effects';

import actions from '../actions';
import createUuidv4 from '../utils/createUuidv4';
import { getArticles } from '../selectors';
import { api, actionTypes } from '../constants';

const fetchNewsData = async (apiRequestLink) => {
    const response = await fetch(apiRequestLink);

    return response.json();
};

function* loadRelatedNews(action) {
    console.log('loadRelatedNews');
    const articles = yield select(getArticles);
    console.log(articles);
    const selectedArticle = articles[action.payload];
    console.log(action.payload);
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
    const newsUploadedActionType = action.payload.uploadedActionType;
    let newsData = null;

    yield put(actions.newsIsLoading(true));

    newsData = yield call(fetchNewsData, [action.payload.apiLink]);

    newsData.articles.forEach((article) => {
        article.id = createUuidv4();
    });
    console.log('loadNews');
    console.log(action);
    console.log(newsData.articles);

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
