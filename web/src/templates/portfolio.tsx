import {graphql, Link } from 'gatsby';
import * as React from 'react';
import PostComponent from '../components/PostComponent';
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query portfolioTemplateQuery($id: String!) {
    portfolio: sanityPortfolio(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
    }
  }
`;
const post = (props) => {
  const { data, errors } = props;
  const portfolio = data && data.portfolio
 return (
   <Layout>
     <Container>
     <Link to="/" className="text-white text-sm underline">
       &larr; Back
     </Link>
       {portfolio && <PostComponent {...portfolio} />}
       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 );
}


export default post
