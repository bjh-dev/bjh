import React from "react";
import Container from '../components/Container'
type TypePost = {
  title: String;
};
function PostComponent(props: TypePost) {
  const { title } = props;
  return (
    <article>
        <h1 className="text-4xl font-black font-serif text-center text-white pt-36 pb-16">
          {title}
        </h1>
    </article>
  );
}

export default PostComponent;
