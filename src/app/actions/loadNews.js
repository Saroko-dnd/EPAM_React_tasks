import { createActions, createAction } from 'redux-actions';

import createUuidv4 from '../utils/createUuidv4';
import constants from '../constants';

const { newsIsLoading, topNewsUploaded } = createActions({
    [constants.actions.NEWS_IS_LOADING]: boolValue => boolValue,
    [constants.actions.TOP_NEWS_UPLOADED]: [
        newArticles => newArticles, // payload
        (newArticles, newsType) => newsType, // meta
    ],
});

function loadNews(apiRequestLink, uploadedActionType) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));

        fetch(apiRequestLink)
            .then(response => response.json())
            .then((newsInfo) => {
                newsInfo.articles.forEach((article) => {
                    article.id = createUuidv4();
                });

                dispatch(newsIsLoading(false));
                dispatch(createAction(uploadedActionType)(newsInfo.articles));
            });
    };
}

export default { newsIsLoading, topNewsUploaded, loadNews };
