import { connect } from 'react-redux';

import actions from '../../actions';
import DetailedNewsArticles from './DetailedNewsArticles';
import { actionTypes } from '../../constants';
import { getUniqueRelatedArticles, getDetailedArticles } from '../../selectors';

const mapStateToProps = state => ({
    relatedArticles: getUniqueRelatedArticles(state),
    detailedArticles: getDetailedArticles(state),
    selectedArticleIndex: state.selectedArticleIndex,
    dataDownloaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    loadRelatedNews: (index) => {
        dispatch(actions.loadRelatedNews(index));
    },
    loadNews: apiUrl =>
        dispatch(actions.loadNews(apiUrl, actionTypes.TOP_NEWS_DOWNLOADED)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedNewsArticles);
