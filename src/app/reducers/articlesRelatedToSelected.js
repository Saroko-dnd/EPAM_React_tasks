import { handleAction } from 'redux-actions';

import constants from '../constants';

const articlesRelatedToSelected = handleAction(
    constants.actions.RELATED_NEWS_DOWNLOADED,
    (state, action) => action.payload,
    [],
);

export default articlesRelatedToSelected;
