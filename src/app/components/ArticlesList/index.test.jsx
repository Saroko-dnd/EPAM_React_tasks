import ArticleList from '.';

describe('render an ArticleList', () => {
    it('should render ArticleList correctly', () => {
        const wrapper = shallow(<ArticleList articles={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
