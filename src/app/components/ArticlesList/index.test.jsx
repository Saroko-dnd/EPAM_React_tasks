import ArticleList from '.';

describe('render an ArticleList', () => {
    const listOfArticles = shallow(<ArticleList articles={[]} />);

    it('should render ArticleList correctly', () => {
        expect(listOfArticles).toMatchSnapshot();
    });
});
