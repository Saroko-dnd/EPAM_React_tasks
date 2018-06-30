import React from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import constants from '../../constants';
import './NewsColumns.scss';

class NewsColumns extends React.Component {
    componentDidMount() {
        const { newsApiToken, newsApiLink } = this.props;
        const newsApiRequestLink = `${newsApiLink}top-headlines?country=us&apiKey=${newsApiToken}`;
        this.props.fetchNewsData(newsApiRequestLink);
    }

    render() {
        if (this.props.dataUploaded) {
            return (
                <section className="news-columns row">
                    {this.props.columns}
                </section>
            );
        }

        return (
            <section className="news-columns">
                <header className="loading-header d-flex flex-column align-items-center">
                    <RingLoader color={constants.colors.green} size={150} />
                    <h2 className="">Loading news...</h2>
                </header>
            </section>
        );
    }
}

NewsColumns.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
    fetchNewsData: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.element),
    dataUploaded: PropTypes.bool,
};

NewsColumns.defaultProps = {
    dataUploaded: false,
    columns: [],
};

export default NewsColumns;
