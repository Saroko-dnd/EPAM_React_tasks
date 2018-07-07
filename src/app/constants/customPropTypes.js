import { createPropType } from 'react-custom-proptypes';

const articlePropType = createPropType(prop => (
    typeof prop === 'object' &&
        typeof prop.author === 'string' &&
        typeof prop.title === 'string' &&
        typeof prop.description === 'string' &&
        typeof prop.url === 'string' &&
        typeof prop.urlToImage === 'string' &&
        typeof prop.publishedAt === 'string' &&
        typeof prop.source === 'object' &&
        typeof prop.source.name === 'string'
), 'Must be news article');

export default { article: articlePropType };
