import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const articles = handleAction(
    actionTypes.NAV_LINKS_TOGGLED,
    (state, action) => action.payload,
    false,
);

export default articles;
