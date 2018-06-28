import React from 'react';
import PropTypes from 'prop-types';

import ArticlesList from '../../components/ArticlesList';
import createUuidv4 from '../../utils/createUuidv4';

class NewsColumns extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [];
    }

    state = {
        dataLoaded: false,
    };

    componentDidMount() {
        const newsApiRequestLink = `${
            this.props.newsApiLink
        }top-headlines?country=us&apiKey=${this.props.newsApiToken}`;
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
                        key={createUuidv4()}
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
            return <section className="row">{this.columns}</section>;
        }

        return (
            <section className="row">
                <h2>Loading news...</h2>
            </section>
        );
    }
}

NewsColumns.propTypes = {
    newsApiLink: PropTypes.string.isRequired,
    newsApiToken: PropTypes.string.isRequired,
};

export default NewsColumns;
