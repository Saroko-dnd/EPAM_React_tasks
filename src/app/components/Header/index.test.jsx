import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import Header from './index';

describe('render an Header', () => {
    const options = new ReactRouterEnzymeContext();
    const onClickEventHandler = jest.fn();
    const header = mount(
        <Header navMenuIsOpened={false} toggleNavLinks={onClickEventHandler} />,
        options.get(),
    );

    it('should render Header correctly', () => {
        expect(header).toMatchSnapshot();
    });

    it('should make navigation panel invisible if property navMenuIsOpened set to false', () => {
        expect(header.find('.site-header-navigation.d-flex').exists()).toEqual(false);
    });

    it('should make navigation panel visible if property navMenuIsOpened set to true', () => {
        header.setProps({ navMenuIsOpened: true });
        expect(header.find('.site-header-navigation.d-flex').exists()).toEqual(true);
    });

    it('should call function toggleNavLinks with value opposite to the value of navMenuIsOpened property if menu  button was clicked', () => {
        header.setProps({ navMenuIsOpened: false });
        header.find('.nav-menu-button').simulate('click');
        expect(onClickEventHandler).toBeCalledWith(true);

        header.setProps({ navMenuIsOpened: true });
        header.find('.nav-menu-button').simulate('click');
        expect(onClickEventHandler).toBeCalledWith(false);
    });
});
