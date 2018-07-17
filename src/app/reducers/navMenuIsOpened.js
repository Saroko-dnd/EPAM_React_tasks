import { handleAction } from 'redux-actions';

import { actionTypes } from '../constants';

const navMenuIsOpened = handleAction(
    actionTypes.TOGGLE_NAV_MENU,
    (state, action) => action.payload,
    false,
);

export default navMenuIsOpened;
