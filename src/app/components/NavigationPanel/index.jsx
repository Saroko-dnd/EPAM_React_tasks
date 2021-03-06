import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationPanel = ({ navLinksCallback, navigationLinks, className }) => (
    <nav
        className={`navigation-panel flex-column flex-lg-row align-self-stretch nav nav-pills justify-content-center align-items-center ${className}`}
    >
        {navigationLinks.map(navLinkInfo => (
            <NavLink
                onClick={() => {
                    navLinksCallback();
                }}
                key={navLinkInfo.id}
                className="nav-item nav-link"
                to={navLinkInfo.destination}
                isActive={navLinkInfo.isActive}
                exact
            >
                {navLinkInfo.title}
            </NavLink>
        ))}
    </nav>
);

NavigationPanel.propTypes = {
    navLinksCallback: PropTypes.func.isRequired,
    navigationLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

NavigationPanel.defaultProps = {
    className: '',
};

export default NavigationPanel;
