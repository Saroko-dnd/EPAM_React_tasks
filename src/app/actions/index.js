import fetchingNews from './loadNews';
import articleSelection from './articleSelected';

export default {
    selectNewArticle: articleSelection.selectNewArticle,
    articleSelected: articleSelection.articleSelected,
    newsIsLoading: fetchingNews.newsIsLoading,
    newsDownloaded: fetchingNews.newsUploaded,
    loadNews: fetchingNews.loadNews,
};
