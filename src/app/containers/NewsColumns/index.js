import _ from 'lodash';
import { connect } from 'react-redux';

import actions from '../../actions';
import NewsColumns from './NewsColumns';
import { actionTypes } from '../../constants';

const mapStateToProps = state => ({
    columns: _.chunk(state.articles, 5),
    dataDownloaded: !state.newsIsLoading,
});

const mapDispatchToProps = dispatch => ({
    loadNews: apiUrl =>
        dispatch(actions.loadNews(apiUrl, actionTypes.TOP_NEWS_DOWNLOADED)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumns);
