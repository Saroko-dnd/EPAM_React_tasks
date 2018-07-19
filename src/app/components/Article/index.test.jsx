import Article from '.';

describe('render an Article', () => {
    it('should render Article correctly', () => {
        const wrapper = shallow(<Article title="rrr" />);
        expect(wrapper).toMatchSnapshot();
    });
});
