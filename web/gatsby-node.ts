const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createAllPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityService(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityPortfolio(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  const pageEdges = (result.data.allSanityPage || {}).edges || [];
  const serviceEdges = (result.data.allSanityService || {}).edges || [];
  const portfolioEdges = (result.data.allSanityPortfolio || {}).edges || [];

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/posts/${slug.current}/`;
    createPage({
      path,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { id },
    });
  });

  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/${slug.current}/`;
    createPage({
      path,
      component: require.resolve(`./src/templates/page.tsx`),
      context: { id },
    });
  });

  serviceEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/services/${slug.current}/`;
    createPage({
      path,
      component: require.resolve(`./src/templates/service.tsx`),
      context: { id },
    });
  });
  portfolioEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/portfolio/${slug.current}/`;
    createPage({
      path,
      component: require.resolve(`./src/templates/portfolio.tsx`),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createAllPages(graphql, actions);
};
