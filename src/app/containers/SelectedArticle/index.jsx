import { connect } from 'react-redux';

import SelectedArticle from './SelectedArticle';
import selectorsForRelatedArticles from '../../selectors';

const mapStateToProps = state => ({
    selectedArticle: state.selectedArticle || undefined,
    relatedArticles: selectorsForRelatedArticles.getUniqueRelatedArticles(state),
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticle);
