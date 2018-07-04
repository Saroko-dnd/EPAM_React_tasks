import constants from '../constants';

function newsDownloaded(newArticles) {
    return {
        type: constants.actions.NEWS_UPLOADED,
        articles: newArticles,
    };
}

export default newsDownloaded;
