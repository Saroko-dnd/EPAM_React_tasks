import constants from '../constants';

function selectedArticle(state = null, action) {
    switch (action.type) {
        case constants.actions.ARTICLE_SELECTED:
            return action.selectedArticle;
        default:
            return state;
    }
}

export default selectedArticle;
