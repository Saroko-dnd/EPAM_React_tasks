import { connect } from 'react-redux';

import actions from '../../actions';
import DetailedNewsArticles from './DetailedNewsArticles';
import { getUniqueRelatedArticles, getDetailedArticles } from '../../selectors';

const mapStateToProps = state => ({
    relatedArticles: getUniqueRelatedArticles(state),
    detailedArticles: getDetailedArticles(state),
    selectedArticleIndex: state.selectedArticleIndex,
});

const mapDispatchToProps = dispatch => ({
    loadRelatedNews: (index) => {
        dispatch(actions.loadRelatedNews(index));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedNewsArticles);
