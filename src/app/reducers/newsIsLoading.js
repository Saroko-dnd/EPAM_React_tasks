import constants from '../constants';

function newsIsLoading(state = false, action) {
    switch (action.type) {
        case constants.actions.NEWS_IS_LOADING:
            return action.isLoaded;
        default:
            return state;
    }
}

export default newsIsLoading;
