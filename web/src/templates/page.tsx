import {graphql, Link } from 'gatsby';
import * as React from 'react';
import PostComponent from '../components/PostComponent';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query pageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id}) {
      id
      title
      slug {
        current
      }
    }
  }
`
const post = (props) => {
  const { data, errors } = props;
  const page = data && data.page
 return (
   <Layout>
     <Container>
     <Link to="/" className="text-white text-sm underline">
       &larr; Back
     </Link>
       {page && <PostComponent {...page} />}
       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 );
}


export default post
