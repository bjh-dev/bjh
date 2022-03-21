import {graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ExcerptPT from '../components/ExcerptPT';

export const query = graphql`
  query postTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      _rawExcerpt
      slug {
        current
      }
    }
  }
`;
type TypePost = {
  title: String;
  _rawExcerpt?: any;
};
type TypePosts = {
  post: TypePost;
};
type TypeProps = {
  data: TypePosts;
  errors: Object;
};
const postTemplate = (props: TypeProps) => {
  const { data, errors } = props;
  const post = data && data.post
 return (
   <Layout>
     <Container>
       <Link to="/" className="text-white text-sm underline">
         &larr; Back
       </Link>
       {post && (
         <article className="prose mx-auto dark:prose-invert prose-a:cursor-pointer">
           <h1 className="text-4xl font-black text-center pt-36 pb-16">{post.title}</h1>
           {post._rawExcerpt && <ExcerptPT RawExcerpt={post._rawExcerpt} />}
         </article>
       )}

       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 )
}


export default postTemplate
