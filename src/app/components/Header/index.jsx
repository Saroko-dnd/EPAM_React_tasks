import React from 'react';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';

import NavigationPanel from '../NavigationPanel';
import newsAppConfig from '../../constants';

import './scss/Header.scss';

const Header = () => (
    <header className="site-header d-flex align-items-center flex-column">
        <header className="d-flex align-items-center">
            <span>
                <NewsIcon height={150} width={150} />
            </span>
            News from all over the world
        </header>
        <NavigationPanel
            className="site-header-navigation"
            navigationLinks={[
                newsAppConfig.navigation.homePage,
                newsAppConfig.navigation.firstPage,
                newsAppConfig.navigation.secondPage,
                newsAppConfig.navigation.thirdPage,
            ]}
        />
    </header>
);

export default Header;
