import { createAction } from 'redux-actions';
import { actionTypes } from '../constants';

const toggleNavLinks = createAction(actionTypes.NAV_LINKS_TOGGLED);

export default { toggleNavLinks };
