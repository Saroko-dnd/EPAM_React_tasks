import { handleAction } from 'redux-actions';

import constants from '../constants';

const newsIsLoading = handleAction(
    constants.actions.NEWS_IS_LOADING,
    (state, action) => action.payload,
    false,
);

export default newsIsLoading;
