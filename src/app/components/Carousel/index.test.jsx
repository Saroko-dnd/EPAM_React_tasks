import Carousel from '.';

describe('render a Carousel', () => {
    const slider = shallow(<Carousel onChange={() => {}} />);

    it('should render Carousel correctly', () => {
        expect(slider).toMatchSnapshot();
    });

    it('Carousel should not be updated if it has some elements', () => {
        const sliderWithElements = shallow(<Carousel
            elements={[
                <p key={1}>text 1</p>,
                <p key={2}>text 2</p>,
                <p key={3}>text 3</p>,
            ]}
            onChange={() => {}}
        />).instance();

        expect(sliderWithElements.shouldComponentUpdate()).toEqual(false);
    });

    it('Carousel should be updated if it is empty', () => {
        const sliderWithoutElements = shallow(<Carousel onChange={() => {}} />).instance();

        expect(sliderWithoutElements.shouldComponentUpdate()).toEqual(true);
    });
});
