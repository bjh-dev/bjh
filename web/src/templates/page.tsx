import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ExcerptPortableText from '@/components/ExcerptPortableText';
import BodyPortableText from '@/components/BodyPortableText';

export const query = graphql`
  query pageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      title
      _rawExcerpt(resolveReferences: { maxDepth: 10 })
      _rawBody(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }
    }
  }
`;
const post = (props) => {
  const { data, errors } = props;
  const page = data && data.page;
  return (
    <Layout>
      <Container>
        <Link to="/" className="text-sm underline">
          &larr; Back
        </Link>
        {page && (
          <article className="prose mx-auto dark:prose-invert prose-a:cursor-pointer">
            <h1 className="text-4xl font-black text-center pt-36 pb-16">
              {page.title}
            </h1>
            {page._rawExcerpt && (
              <ExcerptPortableText RawExcerpt={page._rawExcerpt} />
            )}
            <hr className="my-12" />
            {page._rawBody && <BodyPortableText RawBody={page._rawBody} />}
          </article>
        )}
        {errors && <div>{errors}</div>}
      </Container>
    </Layout>
  );
};

export default post;
