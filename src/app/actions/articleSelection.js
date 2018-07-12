import { createAction } from 'redux-actions';
import { actionTypes } from '../constants';

const selectNewArticle = createAction(actionTypes.ARTICLE_SELECTED);
const selectNewArticleIndex = createAction(actionTypes.ARTICLE_INDEX_SELECTED);

export default { selectNewArticle, selectNewArticleIndex };
