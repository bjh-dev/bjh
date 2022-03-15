// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Import Document type schemas
import page from './documents/page';
import post from './documents/post';
import service from './documents/service';
import siteSettings from './documents/siteSettings';
import portfolio from './documents/portfolio';
// Import Object type schemas
import seo from './objects/seo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Documents */
    page,
    post,
    service,
    siteSettings,
    portfolio,
    /* Objects */
    seo,
  ]),
});
