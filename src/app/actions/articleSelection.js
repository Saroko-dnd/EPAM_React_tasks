import { createAction } from 'redux-actions';
import { actionTypes } from '../constants';

const selectNewArticle = createAction(actionTypes.ARTICLE_SELECTED);

export default { selectNewArticle };
