import {graphql, Link } from 'gatsby';
import * as React from 'react';
import PostComponent from '../components/PostComponent';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query postTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id}) {
      id
      title
      slug {
        current
      }
    }
  }
`
type TypePost = {
  title: String;
}
type TypePosts = {
  post: TypePost;
}
type TypeProps = {
  data: TypePosts;
  errors: Object;
};
const post = (props: TypeProps) => {
  const { data, errors } = props;
  const post = data && data.post
 return (
   <Layout>
     <Container>
     <Link to="/" className="text-white text-sm underline">
       &larr; Back
     </Link>
       {post && <PostComponent {...post} />}
       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 );
}


export default post
