import constants from '../constants';

function articleSelected(selectedArticleId) {
    return (dispatch, getState) => {
        dispatch({
            type: constants.actions.ARTICLE_SELECTED,
            selectedArticle: getState().articles.find(article => article.id === selectedArticleId),
        });
    };
}

export default articleSelected;
