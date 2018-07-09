import { connect } from 'react-redux';

import actions from '../../actions';
import SelectedArticle from './SelectedArticle';
import selectorsForRelatedArticles from '../../selectors';

const mapStateToProps = state => ({
    selectedArticle: state.selectedArticle || undefined,
    relatedArticles: selectorsForRelatedArticles.getUniqueRelatedArticles(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadRelatedNews: () => {
        dispatch(actions.loadRelatedNews(ownProps.match.params.topNewsId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticle);
