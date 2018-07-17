import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const navMenuIsOpened = handleAction(
    actionTypes.NAV_LINKS_TOGGLED,
    (state, action) => action.payload,
    false,
);

export default navMenuIsOpened;
