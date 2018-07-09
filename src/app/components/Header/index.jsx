import React from 'react';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';

import NavigationPanel from '../NavigationPanel';
import { navigation } from '../../constants';

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
                navigation.homePage,
                navigation.firstPage,
                navigation.secondPage,
                navigation.thirdPage,
            ]}
        />
    </header>
);

export default Header;
