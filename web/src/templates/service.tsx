import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { PortableText } from '@portabletext/react';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query serviceTemplateQuery($id: String!) {
    service: sanityService(id: { eq: $id }) {
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
  const service = data && data.service;
  return (
    <Layout>
      <Container>
        <Link to="/" className="text-white text-sm underline">
          &larr; Back
        </Link>
        {service && (
          <>
            <h1 className="text-4xl font-black text-center pt-36 pb-16">
              {service.title}
            </h1>
            {service._rawExcerpt && (
              <PortableText value={service._rawExcerpt} />
            )}
          </>
        )}
        {errors && <div>{errors}</div>}
      </Container>
    </Layout>
  );
};

export default post;
