import NewsColumns from './NewsColumns';
import { actionTypes } from '../../constants';
import { __GetDependency__ } from './index';

describe('NewsColumns container component', () => {
    describe('rendering and behavior', () => {
        const fakeNewsApiToken = 'fake token';
        const fakeNewsApiLink = 'fake link';
        const fakeLoadNews = jest.fn();
        const newsColumnsWrapper = shallow(<NewsColumns
            newsApiToken={fakeNewsApiToken}
            newsApiLink={fakeNewsApiLink}
            loadNews={fakeLoadNews}
        />);

        it('should render loading indicator if property dataDownloaded set to false', () => {
            expect(newsColumnsWrapper).toMatchSnapshot();
        });

        it('should render news columns if property dataDownloaded set to true ', () => {
            newsColumnsWrapper.setProps({
                dataDownloaded: true,
                columns: [
                    <span id="column_1" key="1" />,
                    <span id="column_2" key="2" />,
                    <span id="column_3" key="3" />,
                ],
            });
            expect(newsColumnsWrapper).toMatchSnapshot();
        });
    });

    describe('mapStateToProps', () => {
        const fakeState = {
            articles: [
                { title: 'article_1' },
                { title: 'article_2' },
                { title: 'article_3' },
                { title: 'article_4' },
                { title: 'article_5' },
                { title: 'article_6' },
                { title: 'article_7' },
                { title: 'article_8' },
                { title: 'article_9' },
                { title: 'article_10' },
                { title: 'article_11' },
                { title: 'article_12' },
                { title: 'article_13' },
                { title: 'article_14' },
                { title: 'article_15' },
            ],
            newsIsLoading: false,
        };
        const mapStateToProps = __GetDependency__('mapStateToProps');
        const mappingResult = mapStateToProps(fakeState);

        it('should return object with array of ArticlesList components for news columns', () => {
            expect(mappingResult.columns).toMatchSnapshot();
        });

        it('should return dataDownloaded property with a value opposite to the value of property newsIsLoading in application state', () => {
            expect(mappingResult.dataDownloaded).toEqual(!fakeState.newsIsLoading);
        });
    });

    describe('mapDispatchToProps', () => {
        const fakeDispatch = jest.fn();
        const fakeApiUrl = '/api/top/news';
        const mapDispatchToProps = __GetDependency__('mapDispatchToProps');

        it(`should return object with function loadNews that should dispatch ${
            actionTypes.LOAD_NEWS
        } action with passed api url and${
            actionTypes.TOP_NEWS_DOWNLOADED
        } action type as payload`, () => {
            mapDispatchToProps(fakeDispatch).loadNews(fakeApiUrl);
            expect(fakeDispatch).toBeCalledWith({
                type: actionTypes.LOAD_NEWS,
                payload: {
                    apiLink: fakeApiUrl,
                    downloadedActionType: actionTypes.TOP_NEWS_DOWNLOADED,
                },
            });
        });
    });
});
