import newsIsLoading from './newsIsLoading';
import newsDownloaded from './newsDownloaded';
import createUuidv4 from '../utils/createUuidv4';

function loadNews(apiRequestLink) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));

        fetch(apiRequestLink)
            .then(response => response.json())
            .then((newsInfo) => {
                newsInfo.articles.forEach((article) => {
                    article.id = createUuidv4();
                });

                dispatch(newsIsLoading(false));
                dispatch(newsDownloaded(newsInfo.articles));
            });
    };
}

export default loadNews;
