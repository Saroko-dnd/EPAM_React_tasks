import { call, put, takeEvery, select, fork } from 'redux-saga/effects';

import actions from '../actions';
import createUuidv4 from '../utils/createUuidv4';
import constants from '../constants';
import selectors from '../selectors';

const fetchNewsData = async (apiRequestLink) => {
    const response = await fetch(apiRequestLink);

    return response.json();
};

function* loadRelatedNews(action) {
    const articles = yield select(selectors.getArticles);
    const selectedArticle = articles.find(article => article.id === action.payload);
    const relatedNewsUrl = `${constants.apiAnyNewsLink}q=${
        selectedArticle.title
    }&sortBy=relevancy&pageSize=30&apiKey=${constants.apiToken}`;

    yield put(actions.selectNewArticle(selectedArticle));

    yield fork(
        loadNews,
        actions.loadNews(
            relatedNewsUrl,
            constants.actions.RELATED_NEWS_DOWNLOADED,
        ),
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

    if (newsUploadedActionType === constants.actions.TOP_NEWS_DOWNLOADED) {
        yield put(actions.newsDownloaded(newsData.articles));
    } else if (
        newsUploadedActionType === constants.actions.RELATED_NEWS_DOWNLOADED
    ) {
        yield put(actions.relatedNewsDownloaded(newsData.articles));
    }
}

function* loadNewsWithSaga() {
    yield takeEvery(constants.actions.LOAD_NEWS, loadNews);
    yield takeEvery(constants.actions.LOAD_RELATED_NEWS, loadRelatedNews);
}

export default loadNewsWithSaga;
