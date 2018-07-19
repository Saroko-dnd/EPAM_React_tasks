import DetailedArticle from '.';

describe('render a DetailedArticle', () => {
    it('should render DetailedArticle correctly', () => {
        const wrapper = shallow(<DetailedArticle />);
        expect(wrapper).toMatchSnapshot();
    });
});
