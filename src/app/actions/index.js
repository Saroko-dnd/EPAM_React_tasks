import loadingNews from './loadingNews';
import articleSelection from './articleSelection';
import navigation from './navigation';

export default {
    newsIsLoading: loadingNews.newsIsLoading,
    newsDownloaded: loadingNews.topNewsDownloaded,
    relatedNewsDownloaded: loadingNews.relatedNewsDownloaded,
    loadNews: loadingNews.loadNews,
    loadRelatedNews: loadingNews.loadRelatedNews,
    selectNewArticle: articleSelection.selectNewArticle,
    selectNewArticleIndex: articleSelection.selectNewArticleIndex,
    toggleNavLinks: navigation.toggleNavLinks,
};
