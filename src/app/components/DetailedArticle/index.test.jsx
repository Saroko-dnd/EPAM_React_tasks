import DetailedArticle from '.';

describe('render a DetailedArticle', () => {
    const detailedArticle = mount(<DetailedArticle />);

    it('should render DetailedArticle correctly', () => {
        expect(detailedArticle).toMatchSnapshot();
    });

    it('should have correct default props', () => {
        expect(detailedArticle.prop('article')).toContainEntries([
            ['source', { name: '' }],
            ['title', ''],
            ['author', ''],
            ['description', ''],
            ['urlToImage', ''],
            ['publishedAt', ''],
            ['url', ''],
        ]);
    });
});
