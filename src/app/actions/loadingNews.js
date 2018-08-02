import { createActions } from 'redux-actions';

import { actionTypes } from '../constants';

const {
    newsIsLoading,
    topNewsDownloaded,
    relatedNewsDownloaded,
    loadNews,
    loadRelatedNews,
} = createActions({
    [actionTypes.LOAD_NEWS]: (apiLink, downloadedActionType) => ({
        apiLink,
        downloadedActionType,
    }),
    [actionTypes.NEWS_IS_LOADING]: undefined,
    [actionTypes.LOAD_RELATED_NEWS]: undefined,
    [actionTypes.TOP_NEWS_DOWNLOADED]: undefined,
    [actionTypes.RELATED_NEWS_DOWNLOADED]: undefined,
});

export default {
    newsIsLoading,
    topNewsDownloaded,
    loadNews,
    loadRelatedNews,
    relatedNewsDownloaded,
};
