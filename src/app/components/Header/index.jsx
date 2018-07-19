import React from 'react';
import PropTypes from 'prop-types';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';
import { SlideDown } from 'react-slidedown';

import NavigationPanel from '../NavigationPanel';
import { navigation } from '../../constants';

import './scss/Header.scss';

const Header = ({ toggleNavLinks, navMenuIsOpened }) => (
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
                className="nav-menu-button d-block d-lg-none"
                onClick={() => {
                    toggleNavLinks(!navMenuIsOpened);
                }}
            >
                <span className="fa fa-bars" />
            </button>
        </div>
        <SlideDown className="animation-lg-disabled">
            <NavigationPanel
                className={`site-header-navigation d-lg-flex ${
                    navMenuIsOpened ? 'd-flex' : 'd-none'
                }`}
                navLinksCallback={() => toggleNavLinks(false)}
                navigationLinks={[
                    navigation.homePage,
                    navigation.newsDetails,
                    navigation.secondPage,
                    navigation.thirdPage,
                ]}
            />
        </SlideDown>
    </div>
);

Header.propTypes = {
    toggleNavLinks: PropTypes.func.isRequired,
    navMenuIsOpened: PropTypes.bool.isRequired,
};

export default Header;
