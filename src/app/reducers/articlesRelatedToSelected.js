import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const articlesRelatedToSelected = handleAction(
    actionTypes.RELATED_NEWS_DOWNLOADED,
    (state, action) => action.payload,
    [],
);

export default articlesRelatedToSelected;
