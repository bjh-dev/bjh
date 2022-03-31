import path from 'path';

const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`);

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

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
    const slugPath = `/posts/${slug.current}/`;
    const template = path.resolve(`./src/templates/post.tsx`);
    createPage({
      path: slugPath,
      component: template,
      context: { id },
    });
  });

  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const slugPath = `/${slug.current}/`;
    const template = path.resolve(`./src/templates/page.tsx`);
    createPage({
      path: slugPath,
      component: template,
      context: { id },
    });
  });

  serviceEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const slugPath = `/services/${slug.current}/`;
    const template = path.resolve(`./src/templates/service.tsx`);
    createPage({
      path: slugPath,
      component: template,
      context: { id },
    });
  });
  portfolioEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const slugPath = `/portfolio/${slug.current}/`;
    const template = path.resolve(`./src/templates/portfolio.tsx`);
    createPage({
      path: slugPath,
      component: template,
      context: { id },
    });
  });
}

export const createPages = async ({ graphql, actions }) => {
  await createAllPages(graphql, actions);
};
