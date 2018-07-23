import LoadingIndicator from '.';

describe('render a LoadingIndicator', () => {
    const loadingIndicator = mount(<LoadingIndicator />);

    it('should render LoadingIndicator correctly', () => {
        expect(loadingIndicator).toMatchSnapshot();
    });
});
