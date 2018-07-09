import { createActions } from 'redux-actions';

import constants from '../constants';

const {
    newsIsLoading,
    topNewsDownloaded,
    relatedNewsDownloaded,
    loadNews,
    loadRelatedNews,
} = createActions({
    [constants.actions.LOAD_NEWS]: (apiLink, uploadedActionType) => ({
        apiLink,
        uploadedActionType,
    }),
    [constants.actions.NEWS_IS_LOADING]: undefined,
    [constants.actions.LOAD_RELATED_NEWS]: undefined,
    [constants.actions.TOP_NEWS_DOWNLOADED]: undefined,
    [constants.actions.RELATED_NEWS_DOWNLOADED]: undefined,
});

export default {
    newsIsLoading,
    topNewsDownloaded,
    loadNews,
    loadRelatedNews,
    relatedNewsDownloaded,
};
