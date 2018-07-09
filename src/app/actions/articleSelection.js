import { createAction } from 'redux-actions';
import constants from '../constants';

const selectNewArticle = createAction(constants.actions.ARTICLE_SELECTED);

export default { selectNewArticle };
