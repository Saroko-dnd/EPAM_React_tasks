import Header from './index';

describe('render an Header', () => {
    const siteHeader = shallow(<Header navMenuIsOpened={false} toggleNavLinks={() => {}} />);

    it('should render Header correctly', () => {
        expect(siteHeader).toMatchSnapshot();
    });
});
