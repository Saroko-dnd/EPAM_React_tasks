const newsAppConfig = Object.freeze({
    apiToken: 'e99a027c252b468ab4c0d3d8872f4cfc',
    apiBaseLink: 'https://newsapi.org/v2/',

    navigation: {
        homePage: { destination: '/', title: 'Top news', id: 'nav-link-1' },
        firstPage: {
            destination: '/first',
            title: 'Ultra news',
            id: 'nav-link-2',
        },
        secondPage: {
            destination: '/second',
            title: 'Super news',
            id: 'nav-link-3',
        },
        thirdPage: {
            destination: '/third',
            title: 'Mega news',
            id: 'nav-link-4',
        },
    },

    colors: {
        green: '#009900',
    },

    initialState: {
        articles: [],
        newsIsLoading: false,
    },

    actions: {
        NEWS_IS_LOADING: 'NEWS_IS_LOADING',
        NEWS_UPLOADED: 'NEWS_UPLOADED',
    },
});

export default newsAppConfig;
