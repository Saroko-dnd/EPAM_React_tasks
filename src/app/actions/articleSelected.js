import { createAction } from 'redux-actions';

import constants from '../constants';
import newsLoading from './loadNews';

const selectNewArticle = createAction(constants.actions.ARTICLE_SELECTED);

function articleSelected(selectedArticleId) {
    return (dispatch, getState) => {
        const allArticles = getState().articles.concat(getState().articlesRelatedToSelected);
        const selectedArticle = allArticles.find(article => article.id === selectedArticleId);
        const relatedNewsUrl = `${constants.apiAnyNewsLink}q=${
            selectedArticle.title
        }&sortBy=relevancy&apiKey=${constants.apiToken}`;

        console.log(getState().articlesRelatedToSelected);

        dispatch(selectNewArticle(selectedArticle));
        dispatch(newsLoading.loadNews(
            relatedNewsUrl,
            constants.actions.RELATED_NEWS_UPLOADED,
        ));
    };
}

export default { selectNewArticle, articleSelected };
