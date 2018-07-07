import { handleAction } from 'redux-actions';

import constants from '../constants';

const selectedArticle = handleAction(
    constants.actions.ARTICLE_SELECTED,
    (state, action) => action.payload,
    null,
);

export default selectedArticle;
