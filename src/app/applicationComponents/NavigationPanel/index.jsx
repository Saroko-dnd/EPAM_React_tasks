import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import createUuidv4 from '../../helpers/createUuidv4';

const NavigationPanel = props => (
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

NavigationPanel.propTypes = {
    navigationLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

NavigationPanel.defaultProps = {
    className: '',
};

export default NavigationPanel;
