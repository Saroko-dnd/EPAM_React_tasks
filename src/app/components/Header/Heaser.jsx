import React from 'react';
import PropTypes from 'prop-types';
import { NewsIcon } from 'react-svg-icons-by-igor-saroko';

import NavigationPanel from '../NavigationPanel';
import { navigation } from '../../constants';

import './scss/Header.scss';

class Header extends React.Component {
    shouldComponentUpdate() {
        console.log('header shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <header className="site-header d-flex align-items-center flex-column">
                <header className="d-flex align-items-center">
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
                            this.props.toggleNavLinks(!this.props.navLinksToggled);
                        }}
                    >
                        <span className="fa fa-bars" />
                    </button>
                </header>
                <NavigationPanel
                    className={`site-header-navigation d-sm-flex ${
                        this.props.navLinksToggled ? 'd-flex' : 'd-none'
                    }`}
                    navLinksCallback={this.props.toggleNavLinks}
                    navigationLinks={[
                        navigation.homePage,
                        navigation.newsDetails,
                        navigation.secondPage,
                        navigation.thirdPage,
                    ]}
                />
            </header>
        );
    }
}

Header.propTypes = {
    /* location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
        .isRequired, */
    toggleNavLinks: PropTypes.func.isRequired,
    navLinksToggled: PropTypes.bool.isRequired,
};

export default Header;
