import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import NavigationPanel from '.';

describe('render a NavigationPanel', () => {
    const options = new ReactRouterEnzymeContext();
    const clickEventHandler = jest.fn();
    const navLinks = [
        {
            id: 1,
            destination: 'new destination 1',
            title: 'new title 1',
            isActive: null,
        },
        {
            id: 2,
            destination: 'new destination 2',
            title: 'new title 2',
            isActive: null,
        },
    ];
    const navigationPanel = mount(
        <NavigationPanel
            navLinksCallback={clickEventHandler}
            navigationLinks={navLinks}
        />,
        options.get(),
    );

    it('should render NavigationPanel correctly', () => {
        expect(navigationPanel).toMatchSnapshot();
    });

    it('should have correct default props', () => {
        expect(navigationPanel.prop('className')).toEqual('');
    });

    it('should call function passed as navLinksCallback if one of the links was clicked', () => {
        navigationPanel
            .find('.nav-item.nav-link')
            .at(0)
            .simulate('click');
        expect(clickEventHandler).toHaveBeenCalledTimes(1);

        navigationPanel
            .find('.nav-item.nav-link')
            .at(1)
            .simulate('click');
        expect(clickEventHandler).toHaveBeenCalledTimes(2);
    });
});
