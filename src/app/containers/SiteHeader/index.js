import { connect } from 'react-redux';

import SiteHeader from './SiteHeader';
import actions from '../../actions';

const mapStateToProps = state => ({
    navLinksToggled: state.navLinksToggled,
});

const mapDispatchToProps = dispatch => ({
    toggleNavLinks: (toggle) => {
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
)(SiteHeader);
