import { createAction } from 'redux-actions';

import constants from '../constants';

const selectNewArticle = createAction(constants.actions.ARTICLE_SELECTED);

function articleSelected(selectedArticleId) {
    return (dispatch, getState) => {
        const selectedArticle = getState().articles.find(article => article.id === selectedArticleId);
        dispatch(selectNewArticle(selectedArticle));
    };
}

export default { selectNewArticle, articleSelected };
