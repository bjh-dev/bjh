import * as React from 'react';
import Image from 'gatsby-plugin-sanity-image';

function MainImage({ image }) {
  return (
    <Image
      // pass asset, hotspot, and crop fields
      {...image}
      // tell Sanity how large to make the image (does not set any CSS)
      width={1200}
      // style it how you want it
      className="w-full h-full object-cover"
    />
  );
}

export default MainImage;
