import React from 'react';
import { NavLink } from 'react-router-dom';

import NewsIcon from '../../reusableComponents/svg/NewsIcon';

import './Header.scss';

const Header = () => (
    <header className="site-header d-flex align-items-center flex-column">
        <header className="d-flex align-items-center">
            <span>
                <NewsIcon height="150" width="150" />
            </span>
            News from all over the world
        </header>
        <nav className="site-header-navigation nav nav-pills d-flex justify-content-around">
            <NavLink
                className="nav-item nav-link"
                to="/"
                exact
                // activeStyle={{ color: 'white' }}
            >
                Top news
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                to="/first"
                exact
                // activeStyle={{ color: 'white' }}
            >
                Ultra news
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                to="/second"
                exact
                // activeStyle={{ color: 'white' }}
            >
                Super news
            </NavLink>
            <NavLink
                className="nav-item nav-link"
                to="/third"
                exact
                // activeStyle={{ color: 'white' }}
            >
                Mega news
            </NavLink>
        </nav>
    </header>
);

export default Header;
