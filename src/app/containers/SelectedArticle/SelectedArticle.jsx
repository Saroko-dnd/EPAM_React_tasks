import React from 'react';
import PropTypes from 'prop-types';

import DetailedArticle from '../../components/DetailedArticle';
import constants from '../../constants';

class SelectedArticle extends React.Component {
    componentDidMount() {
        this.props.selectArticle();
    }

    render() {
        return (
            <section>
                <DetailedArticle article={this.props.selectedArticle} />
            </section>
        );
    }
}

SelectedArticle.propTypes = {
    selectArticle: PropTypes.func.isRequired,
    selectedArticle: constants.customPropTypes.article,
};

SelectedArticle.defaultProps = {
    selectedArticle: {
        source: { name: '' },
        title: '',
        author: '',
        description: '',
        urlToImage: '',
        publishedAt: '',
        url: '',
    },
};

export default SelectedArticle;
