import Carousel from '.';

describe('render a Carousel', () => {
    it('should render Carousel correctly', () => {
        const wrapper = shallow(<Carousel title="rrr" onChange={() => {}} />);
        expect(wrapper).toMatchSnapshot();
    });
});
