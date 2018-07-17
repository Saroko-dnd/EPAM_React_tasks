import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const SiteHeader = ({ navLinksToggled, toggleNavLinks }) => (
    <header>
        <Header
            navLinksToggled={navLinksToggled}
            toggleNavLinks={toggleNavLinks}
        />
    </header>
);

SiteHeader.propTypes = {
    toggleNavLinks: PropTypes.func.isRequired,
    navLinksToggled: PropTypes.bool.isRequired,
};

export default SiteHeader;
