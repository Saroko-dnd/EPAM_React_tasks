import React from 'react';

import ArticlesList from '../../reusableComponents/ArticlesList';
import newsAppConfig from '../../configFiles/';
import createUuidv4 from '../../helpers/createUuidv4';

const NewsColumns = () => {
    const columns = [];

    for (let column = 1; column < 5; column += 1) {
        columns.push(<ArticlesList
            className="col-xl-3 col-lg-4 col-md-6"
            key={createUuidv4()}
            newsApiLink={`${
                newsAppConfig.apiBaseLink
            }top-headlines?country=us&pageSize=5&page=${column}&apiKey=${
                newsAppConfig.apiToken
            }`}
        />);
    }

    return <section className="row">{columns}</section>;
};

export default NewsColumns;
