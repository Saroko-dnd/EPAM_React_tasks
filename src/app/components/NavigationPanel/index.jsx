import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationPanel extends React.Component {
    shouldComponentUpdate() {
        console.log('navigation shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render');
        return (
            <nav
                className={`navigation-panel nav nav-pills justify-content-around ${
                    this.props.className
                }`}
            >
                {this.props.navigationLinks.map(navLinkInfo => (
                    <NavLink
                        onClick={(e) => {
                            console.log(e);
                            this.props.navLinksCallback(false);
                            // this.forceUpdate();
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
    }
}

NavigationPanel.propTypes = {
    navLinksCallback: PropTypes.func.isRequired,
    navigationLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
};

NavigationPanel.defaultProps = {
    className: '',
};

export default NavigationPanel;
