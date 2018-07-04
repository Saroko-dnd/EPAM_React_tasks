import newsIsLoading from './newsIsLoading';
import newsDownloaded from './newsDownloaded';

function loadNews(apiRequestLink) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));

        fetch(apiRequestLink)
            .then(response => response.json())
            .then((newsInfo) => {
                dispatch(newsIsLoading(false));
                dispatch(newsDownloaded(newsInfo.articles));
            });
    };
}

export default loadNews;
