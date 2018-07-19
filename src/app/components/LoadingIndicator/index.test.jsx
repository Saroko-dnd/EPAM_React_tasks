import LoadingIndicator from '.';

describe('render a LoadingIndicator', () => {
    it('should render LoadingIndicator correctly', () => {
        const wrapper = shallow(<LoadingIndicator />);
        expect(wrapper).toMatchSnapshot();
    });
});
