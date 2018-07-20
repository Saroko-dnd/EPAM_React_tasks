import Article from '.';

describe('render an Article', () => {
    const article = mount(<Article title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur." />);

    it('should render Article correctly', () => {
        expect(article).toMatchSnapshot();
    });

    it('should have correct default props', () => {
        expect(article.prop('url')).toEqual(null);
        expect(article.prop('imgUrl')).toEqual('');
    });

    it('should crop long titles', () => {
        expect(article.find('.card-title').text()).toEqual('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qua...');
    });

    it('should not render icon instead of image if imgUrl not passed ', () => {
        expect(article.find('img.card-img-top').exists()).toEqual(false);
        expect(article.find('span.fa.fa-newspaper-o').exists()).toEqual(true);
    });

    it('should render image if imgUrl passed ', () => {
        const articleWithImgUrl = shallow(<Article title="" imgUrl="src/image" />);
        const img = articleWithImgUrl.find('img.card-img-top');

        expect(articleWithImgUrl.find('span.fa.fa-newspaper-o').exists()).toEqual(false);
        expect(img.exists()).toEqual(true);
        expect(img.prop('src')).toEqual('src/image');
    });

    it('should not crop short titles', () => {
        const articleWithShortTitle = shallow(<Article title="Lorem ipsum, dolor sit amet." />);
        expect(articleWithShortTitle.find('.card-title').text()).toEqual('Lorem ipsum, dolor sit amet.');
    });
});
