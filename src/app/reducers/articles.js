import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const articles = handleAction(
    actionTypes.TOP_NEWS_DOWNLOADED,
    (state, action) => action.payload,
    [],
);

export default articles;
