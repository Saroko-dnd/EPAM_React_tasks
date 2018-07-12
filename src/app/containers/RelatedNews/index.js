import { connect } from 'react-redux';

import RelatedNews from './RelatedNews';
import { getUniqueRelatedArticles } from '../../selectors';

const mapStateToProps = state => ({
    relatedArticles: getUniqueRelatedArticles(state),
});

export default connect(mapStateToProps, null)(RelatedNews);
