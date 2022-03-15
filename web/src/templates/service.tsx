import {graphql, Link } from 'gatsby';
import * as React from 'react';
import PostComponent from '../components/PostComponent';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query serviceTemplateQuery($id: String!) {
    service: sanityService(id: { eq: $id}) {
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
  const service = data && data.service
 return (
   <Layout>
     <Container>
     <Link to="/" className="text-white text-sm underline">
       &larr; Back
     </Link>
       {service && <PostComponent {...service} />}
       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 );
}


export default post
