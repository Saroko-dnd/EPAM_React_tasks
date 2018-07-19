import Footer from '.';

describe('render a Footer', () => {
    it('should render Footer correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
