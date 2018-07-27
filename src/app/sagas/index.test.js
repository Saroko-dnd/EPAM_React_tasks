import actions from '../actions';
import { actionTypes } from '../constants';
import { cloneableGenerator } from 'redux-saga/utils';
import { __GetDependency__, __Rewire__ } from './fetchingNews';
import { call, put, takeEvery, select, fork } from 'redux-saga/effects';

describe('Sagas', () => {
    describe('loadRelatedNews', () => {
        const responseWithNewsArticles = {
            status: 'ok',
            totalResults: 20,
            articles: [
                {
                    source: {
                        id: 'reuters',
                        name: 'Reuters',
                    },
                    author: 'Adam Jourdan',
                    title:
                        'China says still open to talks on scrapped Qualcomm-NXP takeover',
                    description:
                        "China's market regulator said it still hoped to find a solution to antitrust concerns that doomed Qualcomm Inc's $44 billion (£33.57 billion) takeover of NXP Semiconductors , after finding that proposals to address the issue had fallen short.",
                    url:
                        'https://uk.reuters.com/article/uk-nxp-semicondtrs-m-a-qualcomm/china-says-still-open-to-talks-on-scrapped-qualcomm-nxp-takeover-idUKKBN1KH01G',
                    urlToImage:
                        'https://s3.reutersmedia.net/resources/r/?m=02&d=20180727&t=2&i=1287519579&w=1200&r=LYNXMPEE6Q0B7',
                    publishedAt: '2018-07-27T05:19:56Z',
                },
                {
                    source: {
                        id: 'techcrunch',
                        name: 'TechCrunch',
                    },
                    author: 'Emma Lee',
                    title:
                        "The incredible rise of Pinduoduo, China's newest force in e-commerce",
                    description:
                        'Editor’s note: This post originally appeared on TechNode, an editorial partner of TechCrunch based in China. From Alibaba to JD, China is not short of e-commerce powerhouses. Although the country’s e-commerce market is highly consolidated, it’s not impossible…',
                    url:
                        'https://techcrunch.com/2018/07/26/the-incredible-rise-of-pinduoduo/',
                    urlToImage:
                        'https://techcrunch.com/wp-content/uploads/2018/07/Pinduoduo.jpeg?w=750',
                    publishedAt: '2018-07-27T03:39:00Z',
                },
                {
                    source: {
                        id: 'bloomberg',
                        name: 'Bloomberg',
                    },
                    author: 'David Fickling',
                    title: 'BHP Shows Patience Pays in $10.5 Billion BP Deal',
                    description:
                        'The commodities giant exits its shale disaster at a better price than many expected.',
                    url:
                        'https://www.bloomberg.com/view/articles/2018-07-27/bhp-shows-patience-pays-in-10-5-billion-bp-deal',
                    urlToImage:
                        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/id3.YjdNpSP8/v1/1200x801.jpg',
                    publishedAt: '2018-07-27T03:06:19Z',
                },
                {
                    source: {
                        id: null,
                        name: 'Journalstar.com',
                    },
                    author: 'CANDICE CHOI The Associated Press',
                    title:
                        'Coke is hoping to turn free water machine into a cash stream',
                    description:
                        'NEW YORK — Can a machine that dispenses water for free also turn into a cash stream for Coca-Cola?',
                    url:
                        'https://journalstar.com/news/national/coke-is-hoping-to-turn-free-water-machine-into-a/article_4b7def88-0d1d-5a3c-95b0-a3d83a974a52.html',
                    urlToImage:
                        'https://bloximages.chicago2.vip.townnews.com/journalstar.com/content/tncms/assets/v3/editorial/0/0a/00a67b13-de9d-5e08-9835-4541cf05545b/5b5a47f2d8187.image.jpg?crop=1763%2C992%2C0%2C91&resize=1120%2C630&order=crop%2Cresize',
                    publishedAt: '2018-07-27T02:32:57Z',
                },
                {
                    source: {
                        id: null,
                        name: 'Cbslocal.com',
                    },
                    author: 'CBSDenver',
                    title:
                        'Chipotle Beats Market Expectations With Key Sales Figure',
                    description:
                        'Chipotle said Thursday that a key sales figure rose beyond market expectations in the second quarter, helped by higher menu prices that offset a drop in the number of diners visiting.',
                    url:
                        'https://denver.cbslocal.com/2018/07/26/chipotle-sales/',
                    urlToImage:
                        'https://cbsdenver.files.wordpress.com/2017/11/chipotle.jpg?w=630',
                    publishedAt: '2018-07-27T01:27:00Z',
                },
                {
                    source: {
                        id: 'bloomberg',
                        name: 'Bloomberg',
                    },
                    author: 'Benjamin Bain',
                    title:
                        "Cboe Request to Launch Winklevoss' Bitcoin ETF Rejected by SEC",
                    description:
                        'Bitcoin fell after the U.S. Securities and Exchange Commission rejected a request to list an exchange-traded fund run by Tyler and Cameron Winklevoss, showing the regulator remains skeptical that the market for the cryptocurrency is sufficiently free of abuse…',
                    url:
                        'https://www.bloomberg.com/news/articles/2018-07-26/sec-rejects-winklevoss-twins-request-to-launch-bitcoin-etf',
                    urlToImage:
                        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRNIoI4jbcmA/v1/1200x800.jpg',
                    publishedAt: '2018-07-27T00:33:06Z',
                },
                {
                    source: {
                        id: 'cnn',
                        name: 'CNN',
                    },
                    author: 'Matt McFarland',
                    title: 'Has Elon Musk lost control of his hype machine?',
                    description:
                        "For years, the entrepreneur controlled public opinion of Tesla. That's changing.",
                    url:
                        'https://money.cnn.com/2018/07/26/technology/elon-musk-tesla/index.html',
                    urlToImage:
                        'https://i2.cdn.turner.com/money/dam/assets/180715125731-elon-musk-780x439.jpg',
                    publishedAt: '2018-07-27T00:18:16Z',
                },
                {
                    source: {
                        id: 'the-wall-street-journal',
                        name: 'The Wall Street Journal',
                    },
                    author: null,
                    title: "Amazon's Profit Soars to Record",
                    description: null,
                    url:
                        'https://www.wsj.com/articles/amazon-continues-profit-streak-1532635804',
                    urlToImage: null,
                    publishedAt: '2018-07-26T23:51:00Z',
                },
                {
                    source: {
                        id: 'the-verge',
                        name: 'The Verge',
                    },
                    author: 'Nick Statt',
                    title:
                        'Idaho prison inmates exploited tablet vulnerability to steal $225000 in credits',
                    description:
                        'A group of 364 prison inmates housed across a series of Idaho corrections facilities collectively stole nearly $225,000 worth of digital credits by exploiting a vulnerability in tablets provided by a company called JPay, according to the Associated Press. JPa…',
                    url:
                        'https://www.theverge.com/2018/7/26/17619972/idaho-prison-inmates-tablet-hacks-jpay-stolen-credits-250-thousand',
                    urlToImage:
                        'https://cdn.vox-cdn.com/thumbor/ICFKjWyEoGt-om3MeNlEz7JlsCI=/0x75:970x583/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11783953/jp5s_clear_earbuds_nydoccs_products.jpg',
                    publishedAt: '2018-07-26T23:12:00Z',
                },
                {
                    source: {
                        id: 'the-wall-street-journal',
                        name: 'The Wall Street Journal',
                    },
                    author: null,
                    title:
                        "Intel's Strong Quarter Undercut by Concerns Over Chip Delay",
                    description: null,
                    url:
                        'https://www.wsj.com/articles/intel-profit-surges-on-growth-in-data-center-pc-chip-businesses-1532638087',
                    urlToImage: null,
                    publishedAt: '2018-07-26T22:59:00Z',
                },
                {
                    source: {
                        id: null,
                        name: 'Npr.org',
                    },
                    author: '',
                    title:
                        'Facial Recognition Software Wrongly Identifies 28 Lawmakers As Crime Suspects',
                    description:
                        'The American Civil Liberties Union tested Amazon Rekognition, and found erroneous matches on images of politicians, especially among people of color.',
                    url:
                        'https://www.npr.org/2018/07/26/632724239/facial-recognition-software-wrongly-identifies-28-lawmakers-as-crime-suspects',
                    urlToImage:
                        'https://media.npr.org/assets/img/2018/07/26/gettyimages-460308440_wide-43146ad624178a875f03c92840c358c1b13021e9.jpg?s=1400',
                    publishedAt: '2018-07-26T22:42:00Z',
                },
                {
                    source: {
                        id: 'the-washington-post',
                        name: 'The Washington Post',
                    },
                    author: null,
                    title:
                        'How years of privacy controversies finally caught up with Facebook',
                    description:
                        'The cost of its missteps finally caught up with Facebook this week, sending its stock down more than $100 billion Thursday in the largest drop in value in Wall Street history.',
                    url:
                        'https://www.washingtonpost.com/technology/2018/07/26/how-years-privacy-controversies-finally-caught-up-with-facebook/',
                    urlToImage:
                        'https://www.washingtonpost.com/resizer/ed2TLEXrRKt9GYSNCmv3VMhXuYs=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WCYPXZEQ5AI6RLSZAGEA5LC7DU.jpg',
                    publishedAt: '2018-07-26T22:28:25Z',
                },
                {
                    source: {
                        id: 'the-wall-street-journal',
                        name: 'The Wall Street Journal',
                    },
                    author: null,
                    title: 'Facebook Suffers Worst-Ever Drop in Market Value',
                    description: null,
                    url:
                        'https://www.wsj.com/articles/facebook-shares-tumble-at-open-1532612135',
                    urlToImage: null,
                    publishedAt: '2018-07-26T21:42:00Z',
                },
                {
                    source: {
                        id: 'cnbc',
                        name: 'CNBC',
                    },
                    author: 'Kellie Ell',
                    title:
                        'Auto retailer beats on earnings, thanks to higher used-car sales',
                    description:
                        'Group 1 Automotive, the third-largest auto retailer in the U.S., beat Wall Street earnings expectations, thanks to sales of used cars.',
                    url:
                        'https://www.cnbc.com/2018/07/26/auto-retailer-beats-on-earnings-thanks-to-higher-used-car-sales.html',
                    urlToImage:
                        'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/09/06/103915911-GettyImages-165185250.1910x1000.jpg',
                    publishedAt: '2018-07-26T21:26:00Z',
                },
                {
                    source: {
                        id: 'techcrunch',
                        name: 'TechCrunch',
                    },
                    author: 'Kirsten Korosec',
                    title:
                        "Bird and Skip secure Portland e-scooter permits and there's already drama",
                    description:
                        'Electric scooter startups Bird and Skip have landed permits to operate in Portland under a new pilot program that aims to gauge how the controversial form of micro-transportation will fit in the city. And already there’s a bit of drama, or call it skeptical-s…',
                    url:
                        'https://techcrunch.com/2018/07/26/bird-and-skip-portland-scooter-permits/',
                    urlToImage:
                        'https://techcrunch.com/wp-content/uploads/2018/05/skip-scooter-ride.jpg?w=600',
                    publishedAt: '2018-07-26T21:25:39Z',
                },
                {
                    source: {
                        id: null,
                        name: 'Space.com',
                    },
                    author: 'Hanneke Weitering',
                    title:
                        "Virgin Galactic's VSS Unity Space Plane Aces Test Flight, Reaching Mesosphere for the 1st Time",
                    description:
                        "Virgin Galactic's newest space plane took to the skies again today (July 26) for its third rocket-powered test flight, reaching higher in the atmosphere than the company has previously.",
                    url:
                        'https://www.space.com/41295-virgin-galactic-reaches-mesosphere-epic-test.html',
                    urlToImage:
                        'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3OC8wNjYvb3JpZ2luYWwvdmlyZ2luLWdhbGFjdGljLmpwZw==',
                    publishedAt: '2018-07-26T20:27:46Z',
                },
                {
                    source: {
                        id: 'fox-news',
                        name: 'Fox News',
                    },
                    author: 'Alexandra Deabler',
                    title:
                        "McDonald's worker, customer get into vicious brawl over soda",
                    description:
                        'A McDonald’s employee and a customer were caught on camera in a brutal fight that allegedly started over a free soda.',
                    url:
                        'http://www.foxnews.com/food-drink/2018/07/26/mcdonalds-worker-customer-get-into-viscous-brawl-over-soda.html',
                    urlToImage:
                        'http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2018/07/26/mcdonalds-worker-customer-get-into-viscous-brawl-over-soda/_jcr_content/par/featured_image/media-0.img.jpg/0/0/1532635041613.jpg?ve=1',
                    publishedAt: '2018-07-26T20:01:18Z',
                },
                {
                    source: {
                        id: 'cnn',
                        name: 'CNN',
                    },
                    author: 'Jackie Wattles and Jordan Valinsky',
                    title: "Papa John sues Papa John's",
                    description:
                        "Papa John's founder John Schnatter is suing his namesake company weeks after he left his role as chairman over his use of the N-word on a conference call.",
                    url:
                        'https://money.cnn.com/2018/07/26/news/companies/papa-johns-lawsuit-john-schnatter/index.html',
                    urlToImage:
                        'https://i2.cdn.turner.com/money/dam/assets/180711122254-papa-johns-john-schnatter-780x439.jpg',
                    publishedAt: '2018-07-26T19:31:57Z',
                },
                {
                    source: {
                        id: 'usa-today',
                        name: 'USA Today',
                    },
                    author: 'Bart Jansen',
                    title:
                        'Southwest: Passenger traffic has rebounded after fatal accident',
                    description:
                        "“It feels like the business effects of the April accident are behind us,” CEO said about accident that resulted in Southwest's first-ever passenger fatality.",
                    url:
                        'https://www.usatoday.com/story/travel/flights/todayinthesky/2018/07/26/southwest-rebounds-after-fatal-accident-record-revenue-passengers/843944002/',
                    urlToImage:
                        'https://www.gannett-cdn.com/-mm-/11865b4b237ef9098652f2bc491306eba55482af/c=0-532-5465-3620/local/-/media/2018/07/26/USATODAY/USATODAY/636682139832328067-southwest-engine-1-.JPG?width=3200&height=1680&fit=crop',
                    publishedAt: '2018-07-26T19:26:00Z',
                },
                {
                    source: {
                        id: 'usa-today',
                        name: 'USA Today',
                    },
                    author: 'Ben Tobin',
                    title:
                        'Disney plans to eliminate plastic straws from theme parks by mid-2019',
                    description:
                        'The Walt Disney Company will eliminate single-use plastic straws and stirrers at all of its theme parks, resorts and properties across the world.',
                    url:
                        'https://www.usatoday.com/story/money/2018/07/26/disney-plans-eliminate-plastic-straws-properties-mid-2019/841092002/',
                    urlToImage:
                        'https://www.gannett-cdn.com/-mm-/9748a9a29e1ed4b17d4b3c6bfd50e93a509b0981/c=0-103-2000-1233/local/-/media/2018/07/24/USATODAY/USATODAY/636680414728857482-308623479-magic-kingdom.jpg?width=3200&height=1680&fit=crop',
                    publishedAt: '2018-07-26T15:42:00Z',
                },
            ],
        };
        const testAction = {
            type: actionTypes.LOAD_NEWS,
            payload: {
                downloadedActionType: actionTypes.TOP_NEWS_DOWNLOADED,
                apiLink: '/api/news/latest',
            },
        };
        const loadRelatedNewsSaga = __GetDependency__('loadNews');
        const fetchNewsData = __GetDependency__('fetchNewsData');
        const sagaGenerator = cloneableGenerator(loadRelatedNewsSaga)(testAction);
        let sagaGeneratorClone = null;

        it('should notify the application that the download began', () => {
            expect(sagaGenerator.next().value).toEqual(put(actions.newsIsLoading(true)));
        });

        it('should fetch news using provided in action payload api url', () => {
            expect(sagaGenerator.next().value).toEqual(call(fetchNewsData, [testAction.payload.apiLink]));
        });

        it('should notify the application that the download is complete', () => {
            expect(sagaGenerator.next(responseWithNewsArticles).value).toEqual(put(actions.newsIsLoading(false)));

            sagaGeneratorClone = sagaGenerator.clone();
        });

        it('should save downloaded top news articles to property "articles" in app state', () => {
            expect(sagaGenerator.next().value).toEqual(put(actions.newsDownloaded(responseWithNewsArticles.articles)));
        });

        it('should save downloaded related news articles to property "articlesRelatedToSelected" in app state', () => {
            testAction.payload.downloadedActionType =
                actionTypes.RELATED_NEWS_DOWNLOADED;

            expect(sagaGeneratorClone.next().value).toEqual(put(actions.relatedNewsDownloaded(responseWithNewsArticles.articles)));
        });
    });
});
