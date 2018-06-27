import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import createUuidv4 from '../../helpers/createUuidv4';

const Navigation = props => (
    <nav
        className={`navigation-panel nav nav-pills d-flex justify-content-around ${
            props.className
        }`}
    >
        {props.navigationLinks.map(navLinkInfo => (
            <NavLink
                key={createUuidv4()}
                className="nav-item nav-link"
                to={navLinkInfo.destination}
                exact
            >
                {navLinkInfo.title}
            </NavLink>
        ))}
    </nav>
);

Navigation.propTypes = {
    navigationLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

Navigation.defaultProps = {
    className: '',
};

export default Navigation;
