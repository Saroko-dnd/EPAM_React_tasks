import customPropTypes from './customPropTypes';

const newsAppConfig = Object.freeze({
    apiToken: 'e99a027c252b468ab4c0d3d8872f4cfc',
    apiTopNewsLink: 'https://newsapi.org/v2/top-headlines?',
    apiAnyNewsLink: 'https://newsapi.org/v2/everything?',

    navigation: {
        homePage: {
            destination: '/',
            title: 'Top news',
            id: 'nav-link-1',
            isActive: (match, location) =>
                match || /\/details\/\S$/gi.test(location.pathname),
        },
        firstPage: {
            destination: '/first',
            title: 'Ultra news',
            id: 'nav-link-2',
            isActive: null,
        },
        secondPage: {
            destination: '/second',
            title: 'Super news',
            id: 'nav-link-3',
            isActive: null,
        },
        thirdPage: {
            destination: '/third',
            title: 'Mega news',
            id: 'nav-link-4',
            isActive: null,
        },
        newsDetails: {
            destination: '/details/',
            id: 'nav-link-5',
        },
    },

    colors: {
        green: '#009900',
    },

    initialState: {
        articles: [],
        articlesRelatedToSelected: [],
        selectedArticle: null,
        newsIsLoading: false,
    },

    actions: {
        NEWS_IS_LOADING: 'NEWS_IS_LOADING',
        TOP_NEWS_DOWNLOADED: 'TOP_NEWS_DOWNLOADED',
        RELATED_NEWS_DOWNLOADED: 'RELATED_NEWS_DOWNLOADED',
        ARTICLE_SELECTED: 'ARTICLE_SELECTED',
        LOAD_RELATED_NEWS: 'LOAD_RELATED_NEWS',
        LOAD_NEWS: 'LOAD_NEWS',
    },

    customPropTypes,
});

export default newsAppConfig;
