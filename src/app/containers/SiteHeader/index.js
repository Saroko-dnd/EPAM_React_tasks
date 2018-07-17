import { connect } from 'react-redux';

import SiteHeader from './SiteHeader';
import actions from '../../actions';

const mapStateToProps = state => ({
    navMenuIsOpened: state.navMenuIsOpened,
});

const mapDispatchToProps = dispatch => ({
    toggleNavLinks: (open) => {
        dispatch(actions.toggleNavLinks(open));
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
)(SiteHeader);
