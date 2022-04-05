import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';

Refractor.registerLanguage(js);

type CodeBlockTypes = {
  language: string;
  code: string;
  highlightedLines: number[];
};
export function CodeBlock({
  language,
  code,
  highlightedLines,
}: CodeBlockTypes) {
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language={language}
      value={code}
      markers={highlightedLines}
      className="my-12"
    />
  );
}

export default CodeBlock;
