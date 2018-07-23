import DetailedNewsArticles from './DetailedNewsArticles';

describe('render an DetailedNewsArticles container component', () => {
    const loadNewsCallback = jest.fn();
    const loadRelatedNewsCallback = jest.fn();
    const detailedNewsArticlesWrapper = shallow(<DetailedNewsArticles
        loadNews={loadNewsCallback}
        loadRelatedNews={loadRelatedNewsCallback}
        newsApiLink="link"
        newsApiToken="token"
    />);

    it('should render DetailedNewsArticles correctly', () => {
        expect(detailedNewsArticlesWrapper).toMatchSnapshot();
    });
});
