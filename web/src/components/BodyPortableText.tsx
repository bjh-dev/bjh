import * as React from 'react';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import sanityClient from '@sanity/client';
import { PortableText } from '@portabletext/react';
import CodeBlock from '@/components/CodeBlock';

const config = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: `2022-04-05`, // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = urlBuilder(config);

function urlFor(source) {
  return builder.image(source);
}
// Barebones lazy-loaded image component
function BodyImageComponent({ value, isInline }) {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor(value)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit(`max`)
        .auto(`format`)
        .url()}
      alt={value.alt || ` `}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? `inline-block` : `block`,

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: `${width / height}`,
      }}
      className="my-12 border-2 border-gray-200 rounded-lg p-1"
    />
  );
}

const components = {
  types: {
    mainImage: BodyImageComponent,
    code: ({ children, value }) => {
      const language = value.language || `js`;
      const code = value.code || children;
      const highlightedLines = value.highlightedLines || [];
      return (
        <CodeBlock
          language={language}
          code={code}
          highlightedLines={highlightedLines}
        />
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith(`/`)
        ? `noreferrer noopener`
        : undefined;
      return (
        <a
          className="text-gray-300 list-none hover:text-purple-600 ease-in-out duration-200"
          href={value.ref}
          rel={rel}
        >
          {children}
        </a>
      );
    },
  },
};

function BodyPortableText({ RawBody }) {
  return <PortableText value={RawBody} components={components} />;
}

export default BodyPortableText;
