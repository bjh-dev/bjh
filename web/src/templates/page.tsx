import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ExcerptPortableText from '@/components/ExcerptPortableText';
import MainImage from '@/components/mainImage';
import TextWithImage from '@/components/TextWithImage';
import CodeBlock from '@/components/CodeBlock';

export const query = graphql`
  query pageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 10 })
      sections {
        ... on SanityCodeSnippet {
          _key
          _type
          title
          _rawCode(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityMainImage {
          _type
          _key
          alt
          ...ImageWithPreview
        }
        ... on SanityTextSection {
          _key
          _type
          _rawContent(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityTextWithImageSection {
          imagePosition
          _key
          _type
          _rawText(resolveReferences: { maxDepth: 10 })
          text {
            _key
          }
          image {
            alt
            _key
            ...ImageWithPreview
          }
        }
      }
    }
  }
`;

export default function Page(props) {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <pre>{errors}</pre>
      </Layout>
    );
  }

  const { page } = data;
  const content = (page.sections || [])
    .filter((c) => !c.disabled)
    .map((c) => {
      let el = null;
      switch (c._type) {
        case `textSection`:
          el = <ExcerptPortableText key={c._key} RawExcerpt={c._rawContent} />;
          break;
        case `mainImage`:
          el = <MainImage key={c._key} image={c} />;
          break;
        case `textWithImageSection`:
          el = <TextWithImage key={c._key} content={c} />;
          break;
        case `codeSnippet`:
          el = <CodeBlock key={c._key} code={c} />;
          break;
        default:
          el = null;
      }
      return el;
    });
  return (
    <Layout>
      <Container>
        <Link to="/" className="text-sm underline">
          &larr; Back
        </Link>
        <h2 className="font-bold text-3xl mb-6 mt-4">{page.title}</h2>
        <article className="prose prose-a:cursor-pointer">{content}</article>
      </Container>
    </Layout>
  );
}
