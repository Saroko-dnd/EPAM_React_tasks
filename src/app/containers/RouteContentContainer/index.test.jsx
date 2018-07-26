import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RouteContentContainer from './index';
import { initialState } from '../../constants';

describe('RouteContentContainer component (routing test)', () => {
    describe('rendering and behavior', () => {
        const mockStore = configureStore();
        const store = mockStore(initialState);

        it('should render top news columns if path = "/"', () => {
            const router = (
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <RouteContentContainer />
                    </MemoryRouter>
                </Provider>
            );
            const routerWrapper = render(router);

            expect(routerWrapper).toMatchSnapshot();
        });

        it('should render slider with detailed news and news related to the selected news if path = "/details"', () => {
            const router = (
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/details']}>
                        <RouteContentContainer />
                    </MemoryRouter>
                </Provider>
            );
            const routerWrapper = render(router);

            expect(routerWrapper).toMatchSnapshot();
        });

        it('should render "Route 3" message if path = "/second"', () => {
            const router = (
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/second']}>
                        <RouteContentContainer />
                    </MemoryRouter>
                </Provider>
            );
            const routerWrapper = render(router);

            expect(routerWrapper).toMatchSnapshot();
        });

        it('should render "Route 4" message if path = "/third"', () => {
            const router = (
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/third']}>
                        <RouteContentContainer />
                    </MemoryRouter>
                </Provider>
            );
            const routerWrapper = render(router);

            expect(routerWrapper).toMatchSnapshot();
        });
    });
});
