import { connect } from 'react-redux';

import NewsColumns from './NewsColumns';
import actions from '../../actions';

const mapStateToProps = state => ({
    columns: NewsColumns.createColumnsFromNews(state.articles),
    dataUploaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchNewsData: url => dispatch(actions.loadNews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
