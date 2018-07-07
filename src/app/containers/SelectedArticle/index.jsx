import { connect } from 'react-redux';

import SelectedArticle from './SelectedArticle';
import Actions from '../../actions';
import selectorsForRelatedArticles from '../../selectors';

const mapStateToProps = state => ({
    selectedArticle: state.selectedArticle || undefined,
    relatedArticles: selectorsForRelatedArticles.getUniqueRelatedArticles(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectArticle: () =>
        dispatch(Actions.articleSelected(ownProps.match.params.top_news_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticle);
