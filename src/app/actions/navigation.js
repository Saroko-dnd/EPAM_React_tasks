import { createAction } from 'redux-actions';
import { actionTypes } from '../constants';

const toggleNavLinks = createAction(actionTypes.TOGGLE_NAV_MENU);

export default { toggleNavLinks };
