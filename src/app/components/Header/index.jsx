import { connect } from 'react-redux';

import Header from './Heaser';
import actions from '../../actions';

const mapStateToProps = state => ({
    navLinksToggled: state.navLinksToggled,
});

const mapDispatchToProps = dispatch => ({
    toggleNavLinks: (toggle) => {
        console.log(toggle);
        dispatch(actions.toggleNavLinks(toggle));
    },
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
});

const options = { pure: false };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options,
)(Header);
