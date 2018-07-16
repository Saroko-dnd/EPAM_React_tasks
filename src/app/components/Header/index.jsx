import React from 'react';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';

import NavigationPanel from '../NavigationPanel';
import { navigation } from '../../constants';

import './scss/Header.scss';

const Header = () => (
    <header className="site-header d-flex align-items-center flex-column">
        <header className="d-flex align-items-center">
            <div className="dropdown d-block d-sm-none">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                >
                    <a className="dropdown-item" href="/">
                        Action
                    </a>
                    <a className="dropdown-item" href="/">
                        Another action
                    </a>
                    <a className="dropdown-item" href="/">
                        Something else here
                    </a>
                    <a className="dropdown-item" href="/">
                        Something else here
                    </a>
                </div>
            </div>
            <span>
                <NewsIcon height={150} width={150} />
            </span>
            <h1>News from all over the world</h1>
        </header>
        <NavigationPanel
            className="site-header-navigation"
            navigationLinks={[
                navigation.homePage,
                navigation.newsDetails,
                navigation.secondPage,
                navigation.thirdPage,
            ]}
        />
    </header>
);

export default Header;
