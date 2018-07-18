import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import './scss/carousel.scss';

class CustomCarousel extends React.Component {
    shouldComponentUpdate() {
        return this.props.elements.length === 0;
    }

    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel
                    render={() => <h5>dfdfdf</h5>}
                    onChange={this.props.onChange}
                    className="d-block"
                    showThumbs={false}
                    width="100%"
                >
                    {this.props.elements}
                </Carousel>
            </div>
        );
    }
}

CustomCarousel.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.element),
    onChange: PropTypes.func.isRequired,
};

CustomCarousel.defaultProps = {
    elements: [],
};

export default CustomCarousel;
