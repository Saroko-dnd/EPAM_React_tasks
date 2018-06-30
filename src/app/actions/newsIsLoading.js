import constants from '../constants';

function newsIsLoading(boolVar) {
    return {
        type: constants.actions.NEWS_IS_LOADING,
        isLoaded: boolVar,
    };
}

export default newsIsLoading;
