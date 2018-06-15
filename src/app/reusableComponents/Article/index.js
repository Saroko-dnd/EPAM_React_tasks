import React from 'react';
// import { NavLink } from 'react-router-dom';

import './Article.scss';

const Article = props => (
    <article className="news-article d-flex align-items-center flex-column">
        <h2>{props.title}</h2>
        <a href={props.linkToDetails}>read more</a>
    </article>
);

/* <NavLink
className=""
to={props.linkToDetails}
exact
/> */

export default Article;
