import DetailedNewsArticles from './DetailedNewsArticles';
import { actionTypes } from '../../constants';
import { __GetDependency__ } from './index';

describe('DetailedNewsArticles container component', () => {
    describe('rendering and behavior', () => {
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

        it('should render LoadingIndicator instead of ArticlesList while the related news is loading', () => {
            expect(detailedNewsArticlesWrapper.find('LoadingIndicator').exists()).toEqual(true);
            expect(detailedNewsArticlesWrapper.find('ArticlesList').exists()).toEqual(false);
        });

        it('should load related news for selected article (with index 0) after downloading the top news', () => {
            detailedNewsArticlesWrapper.setProps({
                detailedArticles: [<p />, <p />, <p />],
            });
            expect(loadRelatedNewsCallback).toBeCalledWith(0);
        });

        it('should render ArticlesList instead of LoadingIndicator when the download of related news is completed', () => {
            detailedNewsArticlesWrapper.setProps({
                dataDownloaded: true,
            });
            expect(detailedNewsArticlesWrapper.find('LoadingIndicator').exists()).toEqual(false);
            expect(detailedNewsArticlesWrapper.find('ArticlesList').exists()).toEqual(true);
        });
    });

    describe('mapStateToProps', () => {
        const fakeState = {
            articlesRelatedToSelected: [
                { title: 'title_1' },
                { title: 'title_1' },
                { title: 'title_2' },
                { title: 'title_2' },
                { title: 'title_3' },
            ],
            articles: [
                {
                    title: 'title_1',
                    source: { name: '' },
                    author: '',
                    description: '',
                    urlToImage: '',
                    publishedAt: '',
                    url: '',
                },
                {
                    title: 'title_2',
                    source: { name: '' },
                    author: '',
                    description: '',
                    urlToImage: '',
                    publishedAt: '',
                    url: '',
                },
                {
                    title: 'title_3',
                    source: { name: '' },
                    author: '',
                    description: '',
                    urlToImage: '',
                    publishedAt: '',
                    url: '',
                },
                {
                    title: 'title_4',
                    source: { name: '' },
                    author: '',
                    description: '',
                    urlToImage: '',
                    publishedAt: '',
                    url: '',
                },
                {
                    title: 'title_5',
                    source: { name: '' },
                    author: '',
                    description: '',
                    urlToImage: '',
                    publishedAt: '',
                    url: '',
                },
            ],
            selectedArticleIndex: 3,
            newsIsLoading: true,
        };
        const mapStateToProps = __GetDependency__('mapStateToProps');
        const mappedState = mapStateToProps(fakeState);

        it('should return selected article index from application state', () => {
            expect(mappedState.selectedArticleIndex).toEqual(3);
        });

        it('should return dataDownloaded property with a value opposite to the value of property newsIsLoading in application state', () => {
            expect(mappedState.dataDownloaded).toEqual(false);
        });

        it('should return array of articles, related to selected detailed article with unique titles', () => {
            expect(mappedState.relatedArticles).toBeArrayOfSize(3);

            expect(mappedState.relatedArticles[0].title).toEqual('title_1');
            expect(mappedState.relatedArticles[1].title).toEqual('title_2');
            expect(mappedState.relatedArticles[2].title).toEqual('title_3');
        });

        it('should return array of DetailedArticle components, created from articles in application state', () => {
            let mountedComponent;
            expect(mappedState.detailedArticles).toBeArrayOfSize(5);

            mappedState.detailedArticles.forEach((component, index) => {
                mountedComponent = mount(component);

                expect(mountedComponent.props().article.title).toEqual(`title_${index + 1}`);
                expect(typeof mountedComponent.type()).toEqual('function');
                expect(mountedComponent.type().name).toEqual('DetailedArticle');
            });
        });
    });

    describe('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const mapDispatchToProps = __GetDependency__('mapDispatchToProps');
        const selectedArticleIndex = 5;
        const testApiUrl = '/api/top/news';

        it(`should return object with function loadRelatedNews that should dispatch ${
            actionTypes.LOAD_RELATED_NEWS
        } action with passed index as payload`, () => {
            mapDispatchToProps(dispatch).loadRelatedNews(selectedArticleIndex);
            expect(dispatch).toBeCalledWith({
                type: actionTypes.LOAD_RELATED_NEWS,
                payload: selectedArticleIndex,
            });
        });

        it(`should return object with function loadNews that should dispatch LOAD_NEWS action with passed url and  ${
            actionTypes.TOP_NEWS_DOWNLOADED
        } action type as payload`, () => {
            mapDispatchToProps(dispatch).loadNews(testApiUrl);
            expect(dispatch).toBeCalledWith({
                type: actionTypes.LOAD_NEWS,
                payload: {
                    apiLink: testApiUrl,
                    downloadedActionType: actionTypes.TOP_NEWS_DOWNLOADED,
                },
            });
        });
    });
});
