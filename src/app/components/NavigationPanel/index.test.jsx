import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import NavigationPanel from '.';

describe('render a NavigationPanel', () => {
    const options = new ReactRouterEnzymeContext();
    const clickEventHandler = jest.fn();
    const navLinks = [
        {
            id: 1,
            destination: 'destination 1',
        },
        {
            id: 2,
            destination: 'destination 2',
        },
    ];
    const navigationPanel = shallow(
        <NavigationPanel
            navLinksCallback={clickEventHandler}
            navigationLinks={navLinks}
        />,
        options.get(),
    );

    it('should render NavigationPanel correctly', () => {
        expect(navigationPanel).toMatchSnapshot();
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
