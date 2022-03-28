import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { PortableText } from '@portabletext/react';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query portfolioTemplateQuery($id: String!) {
    portfolio: sanityPortfolio(id: { eq: $id }) {
      id
      title
      _rawExcerpt
      slug {
        current
      }
    }
  }
`;
const post = (props) => {
  const { data, errors } = props;
  const portfolio = data && data.portfolio;
  return (
    <Layout>
      <Container>
        <Link to="/" className="text-white text-sm underline">
          &larr; Back
        </Link>
        {portfolio && (
          <>
            <h1 className="text-4xl font-black text-center pt-36 pb-16">
              {portfolio.title}
            </h1>
            {portfolio._rawExcerpt && (
              <PortableText value={portfolio._rawExcerpt} />
            )}
          </>
        )}
        {errors && <div>{errors}</div>}
      </Container>
    </Layout>
  );
};

export default post;
