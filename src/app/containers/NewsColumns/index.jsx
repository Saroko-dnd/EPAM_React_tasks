import React from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import ArticlesList from '../../components/ArticlesList';
import constants from '../../constants';
import './NewsColumns.scss';

class NewsColumns extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [];
    }

    state = {
        dataLoaded: false,
    };

    componentDidMount() {
        const { newsApiToken, newsApiLink } = this.props;
        const newsApiRequestLink = `${newsApiLink}top-headlines?country=us&apiKey=${newsApiToken}`;
        let sliceStartIndex;
        let sliceEndIndex;

        fetch(newsApiRequestLink)
            .then(response => response.json())
            .then((newsInfo) => {
                for (let column = 0; column < 4; column += 1) {
                    sliceStartIndex = 5 * column;
                    sliceEndIndex = sliceStartIndex + 5;

                    this.columns.push(<ArticlesList
                        className="col-xl-3 col-lg-4 col-md-6"
                        key={newsInfo.articles[sliceStartIndex].url}
                        articles={newsInfo.articles.slice(
                            sliceStartIndex,
                            sliceEndIndex,
                        )}
                    />);
                }

                this.setState({ dataLoaded: true });
            });
    }

    render() {
        if (this.state.dataLoaded) {
            return <section className="news-columns row">{this.columns}</section>;
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
};

export default NewsColumns;
