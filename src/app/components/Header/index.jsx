import React from 'react';
import PropTypes from 'prop-types';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';

import NavigationPanel from '../NavigationPanel';
import { navigation } from '../../constants';

import './scss/Header.scss';

const Header = ({ toggleNavLinks, navLinksToggled }) => (
    <div className="site-header d-flex align-items-center flex-column">
        <div className="d-flex align-items-center">
            <span>
                <NewsIcon
                    height={150}
                    width={150}
                    className="site-header-icon"
                />
            </span>
            <h1>News from all over the world</h1>
            <button
                className="nav-menu-button d-block d-sm-none"
                onClick={() => {
                    toggleNavLinks(!navLinksToggled);
                }}
            >
                <span className="fa fa-bars" />
            </button>
        </div>
        <NavigationPanel
            className={`site-header-navigation d-sm-flex ${
                navLinksToggled ? 'd-flex' : 'd-none'
            }`}
            navLinksCallback={() => toggleNavLinks(false)}
            navigationLinks={[
                navigation.homePage,
                navigation.newsDetails,
                navigation.secondPage,
                navigation.thirdPage,
            ]}
        />
    </div>
);

Header.propTypes = {
    toggleNavLinks: PropTypes.func.isRequired,
    navLinksToggled: PropTypes.bool.isRequired,
};

export default Header;
