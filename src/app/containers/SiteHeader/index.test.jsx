import SiteHeader from './SiteHeader';
import { actionTypes } from '../../constants';
import { __GetDependency__ } from './index';

describe('SiteHeader container component', () => {
    describe('rendering and behavior', () => {
        const fakeToogle = jest.fn();
        const menuIsOpened = false;
        const siteHeaderWrapper = shallow(<SiteHeader
            navMenuIsOpened={menuIsOpened}
            toggleNavLinks={fakeToogle}
        />);

        it('should render SiteHeader correctly', () => {
            expect(siteHeaderWrapper).toMatchSnapshot();
        });
    });

    describe('mapStateToProps', () => {
        const fakeState = {
            navMenuIsOpened: false,
        };
        const mapStateToProps = __GetDependency__('mapStateToProps');
        const mappingResult = mapStateToProps(fakeState);

        it('should map property navMenuIsOpened from application state to SiteHeader property navMenuIsOpened', () => {
            expect(mappingResult.navMenuIsOpened).toEqual(fakeState.navMenuIsOpened);
        });
    });

    describe('mapDispatchToProps', () => {
        const fakeDispatch = jest.fn();
        const isMenuOpened = true;
        const mapDispatchToProps = __GetDependency__('mapDispatchToProps');

        it('toggleNavLinks(boolean) should open/close navigation menu', () => {
            mapDispatchToProps(fakeDispatch).toggleNavLinks(isMenuOpened);
            expect(fakeDispatch).toBeCalledWith({
                type: actionTypes.TOGGLE_NAV_MENU,
                payload: isMenuOpened,
            });
        });
    });

    describe('mergeProps', () => {
        const firstTestProps = {
            width: 200,
            height: 150,
        };
        const secondTestProps = {
            name: 'rat',
            id: '76grass89',
        };

        const mergeProps = __GetDependency__('mergeProps');
        const mergedProps = mergeProps(firstTestProps, secondTestProps);

        it('should merge all properties in one object', () => {
            expect(mergedProps).toEqual({
                ...firstTestProps,
                ...secondTestProps,
            });
        });
    });
});
