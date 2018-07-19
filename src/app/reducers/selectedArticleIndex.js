import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const selectedArticle = handleAction(
    actionTypes.ARTICLE_INDEX_SELECTED,
    (state, action) => action.payload,
    null,
);

export default selectedArticle;
