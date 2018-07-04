import constants from '../constants';

function articles(state = [], action) {
    switch (action.type) {
        case constants.actions.NEWS_UPLOADED:
            return action.articles;
        default:
            return state;
    }
}

export default articles;
