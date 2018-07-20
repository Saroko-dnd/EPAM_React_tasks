import ArticleList from '.';

describe('render an ArticleList', () => {
    const listOfArticles = mount(<ArticleList articles={[]} />);

    it('should render ArticleList correctly', () => {
        expect(listOfArticles).toMatchSnapshot();
    });

    it('should have correct default props', () => {
        expect(listOfArticles.prop('className')).toEqual('');
        expect(listOfArticles.prop('title')).toEqual('');
    });
});
