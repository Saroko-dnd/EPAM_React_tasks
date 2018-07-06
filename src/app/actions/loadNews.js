import { createActions } from 'redux-actions';

import createUuidv4 from '../utils/createUuidv4';
import constants from '../constants';

const { newsIsLoading, newsUploaded } = createActions({
    [constants.actions.NEWS_IS_LOADING]: boolValue => boolValue,
    [constants.actions.NEWS_UPLOADED]: newArticles => newArticles,
});

function loadNews(apiRequestLink) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));

        fetch(apiRequestLink)
            .then(response => response.json())
            .then((newsInfo) => {
                newsInfo.articles.forEach((article) => {
                    article.id = createUuidv4();
                });

                dispatch(newsIsLoading(false));
                dispatch(newsUploaded(newsInfo.articles));
            });
    };
}

export default { newsIsLoading, newsUploaded, loadNews };
