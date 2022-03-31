import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

export const query = graphql`
  query HomePageQuery {
    posts: allSanityPost {
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
    pages: allSanityPage {
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
    services: allSanityService {
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
    portfolios: allSanityPortfolio {
      edges {
        node {
          title
          id
          slug {
            current
          }
        }
      }
    }
  }
`;

function HomePage({ data }) {
  const posts = data.posts.edges;
  const pages = data.pages.edges;
  const services = data.services.edges;
  const portfolios = data.portfolios.edges;

  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-800 min-h-screen">
        <Container>
          <h1 className="text-4xl font-black font-serif text-center text-gray-800 dark:text-white pt-12 pb-8">
            Hello
          </h1>
        </Container>
        <Container>
          <div className="py-8">
            <h2 className="text-2xl font-black font-serif text-gray-800 dark:text-white mb-4">
              Posts
            </h2>
            <ul>
              {posts.map((post) => (
                <li key={post.node.id}>
                  <Link
                    className="text-gray-800 dark:text-white font-serif list-none hover:text-purple-600 ease-in-out duration-200"
                    to={`/posts/${post.node.slug.current}`}
                  >
                    {post.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
        <Container>
          <div className="py-8">
            <h2 className="text-2xl font-black font-serif text-gray-800 dark:text-white mb-4">
              Pages
            </h2>
            <ul>
              {pages.map((page) => (
                <li key={page.node.id}>
                  <Link
                    className="text-gray-800 dark:text-white font-serif list-none hover:text-purple-600 ease-in-out duration-200"
                    to={`/${page.node.slug.current}`}
                  >
                    {page.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
        <Container>
          <div className="py-8">
            <h2 className="text-2xl font-black font-serif text-gray-800 dark:text-white mb-4">
              Services
            </h2>
            <ul>
              {services.map((service) => (
                <li key={service.node.id}>
                  <Link
                    className="text-gray-800 dark:text-white font-serif list-none hover:text-purple-600 ease-in-out duration-200"
                    to={`/services/${service.node.slug.current}`}
                  >
                    {service.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
        <Container>
          <div className="py-8">
            <h2 className="text-2xl font-black mb-4 text-gray-800 dark:text-white">
              Portfolio
            </h2>
            <ul>
              {portfolios.map((portfolio) => (
                <li key={portfolio.node.id}>
                  <Link
                    className="text-gray-800 dark:text-white list-none hover:text-purple-600 ease-in-out duration-200"
                    to={`/portfolio/${portfolio.node.slug.current}`}
                  >
                    {portfolio.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default HomePage;
