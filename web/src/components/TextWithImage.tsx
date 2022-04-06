import * as React from 'react';
import ExcerptPortableText from './ExcerptPortableText';
import MainImage from './mainImage';

function TextWithImage({ content }) {
  const { text, image } = content;
  const imagePosition = content.imagePosition || `left`;
  return (
    <div className="grid grid-cols-2 grid-flow-col gap-4">
      <div
        className={
          imagePosition === `Left`
            ? `col-span-1 col-start-1`
            : `col-span-1 col-start-2`
        }
      >
        <ExcerptPortableText
          key={text._key}
          RawExcerpt={content._rawText.content}
        />
      </div>
      <div
        className={
          imagePosition === `Left`
            ? `col-span-1 col-start-2`
            : `col-span-1 col-start-1`
        }
      >
        <MainImage key={image._key} image={image} />
      </div>
    </div>
  );
}

export default TextWithImage;
