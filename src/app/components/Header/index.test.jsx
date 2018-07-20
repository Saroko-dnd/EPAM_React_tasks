import Header from './index';

describe('render an Header', () => {
    it('should render Header correctly', () => {
        const wrapper = shallow(<Header navMenuIsOpened={false} toggleNavLinks={() => {}} />);
        expect(wrapper).toMatchSnapshot();
    });
});
