import { PortableText } from '@portabletext/react';
import * as React from 'react';

const ExcerptPortableTextComponent = {
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

function ExcerptPortableText({ RawExcerpt }) {
  return (
    <PortableText
      value={RawExcerpt}
      components={ExcerptPortableTextComponent}
    />
  );
}

export default ExcerptPortableText;
