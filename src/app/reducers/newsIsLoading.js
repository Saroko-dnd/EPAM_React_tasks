import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const newsIsLoading = handleAction(
    actionTypes.NEWS_IS_LOADING,
    (state, action) => action.payload,
    false,
);

export default newsIsLoading;
