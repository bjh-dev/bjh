import React from 'react';
import Refractor from 'react-refractor';

import jsx from 'refractor/lang/jsx.js';
import typescript from 'refractor/lang/typescript';
import '@/assets/styles/prism-material-dark.css';

Refractor.registerLanguage(jsx);
Refractor.registerLanguage(typescript);

export function CodeBlock({ code }) {
  return (
    <figure className="bg-gray-200 rounded-md shadow-md my-12">
      <Refractor
        // In this example, `props` is the value of a `code` field
        language={code._rawCode.language}
        value={code._rawCode.code}
        markers={code._rawCode.highlightedLines || []}
        className="my-12 refractor line-numbers"
      />
      <figcaption className="font-sans text-xs tracking-tight p-1 my-1">
        {code.title}
      </figcaption>
    </figure>
  );
}

export default CodeBlock;
