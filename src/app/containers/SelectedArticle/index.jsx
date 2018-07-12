import { connect } from 'react-redux';

import actions from '../../actions';
import SelectedArticle from './SelectedArticle';
import { getUniqueRelatedArticles, getDetailedArticles } from '../../selectors';

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(getUniqueRelatedArticles(state));
    return {
        relatedArticles: getUniqueRelatedArticles(state),
        detailedArticles: getDetailedArticles(state),
        selectedArticleIndex: state.selectedArticleIndex,
    };
};

const mapDispatchToProps = dispatch => ({
    loadRelatedNews: (index) => {
        console.log(`loadRelatedNews_dispatch ${index}`);
        dispatch(actions.loadRelatedNews(index));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticle);
