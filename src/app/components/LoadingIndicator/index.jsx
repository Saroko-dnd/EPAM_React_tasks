import React from 'react';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';

import constants from '../../constants';
import './LoadingIndicator.scss';

const LoadingIndicator = ({ color, size, message }) => (
    <div className="loading-indicator d-flex flex-column align-items-center">
        <RingLoader color={color} size={size} />
        <span>{message}</span>
    </div>
);

LoadingIndicator.propTypes = {
    color: ExtraPropTypes.color,
    size: PropTypes.number,
    message: PropTypes.string,
};

LoadingIndicator.defaultProps = {
    color: constants.colors.green,
    size: 150,
    message: 'Loading...',
};

export default LoadingIndicator;
