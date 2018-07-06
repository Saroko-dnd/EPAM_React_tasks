import { handleAction } from 'redux-actions';

import constants from '../constants';

const articles = handleAction(
    constants.actions.TOP_NEWS_UPLOADED,
    (state, action) => action.payload,
    [],
);

export default articles;
