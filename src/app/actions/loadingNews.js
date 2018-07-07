import { createActions } from 'redux-actions';

import constants from '../constants';

const {
    newsIsLoading,
    topNewsDownloaded,
    relatedNewsDownloaded,
    loadNews,
    loadRelatedNews,
} = createActions({
    [constants.actions.NEWS_IS_LOADING]: boolValue => boolValue,
    [constants.actions.LOAD_NEWS]: (apiLink, uploadedActionType) => ({
        apiLink,
        uploadedActionType,
    }),
    [constants.actions.LOAD_RELATED_NEWS]: topNewsId => topNewsId,
    [constants.actions.TOP_NEWS_DOWNLOADED]: newArticles => newArticles,
    [constants.actions.RELATED_NEWS_DOWNLOADED]: newArticles => newArticles,
});

export default {
    newsIsLoading,
    topNewsDownloaded,
    loadNews,
    loadRelatedNews,
    relatedNewsDownloaded,
};
