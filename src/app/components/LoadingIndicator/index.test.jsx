import LoadingIndicator from '.';
import { colors } from '../../constants';

describe('render a LoadingIndicator', () => {
    const loadingIndicator = mount(<LoadingIndicator />);

    it('should render LoadingIndicator correctly', () => {
        expect(loadingIndicator).toMatchSnapshot();
    });

    it('should have correct default props', () => {
        expect(loadingIndicator.prop('color')).toEqual(colors.green);
        expect(loadingIndicator.prop('size')).toEqual(150);
        expect(loadingIndicator.prop('message')).toEqual('Loading...');
    });
});
