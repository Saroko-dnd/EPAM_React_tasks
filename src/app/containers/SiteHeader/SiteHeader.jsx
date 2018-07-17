import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const SiteHeader = ({ navMenuIsOpened, toggleNavLinks }) => (
    <header>
        <Header
            navMenuIsOpened={navMenuIsOpened}
            toggleNavLinks={toggleNavLinks}
        />
    </header>
);

SiteHeader.propTypes = {
    toggleNavLinks: PropTypes.func.isRequired,
    navMenuIsOpened: PropTypes.bool.isRequired,
};

export default SiteHeader;
