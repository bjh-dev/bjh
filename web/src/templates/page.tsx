import {graphql, Link } from 'gatsby';
import * as React from 'react';
import { PortableText } from "@portabletext/react";
import Layout from '../components/Layout';
import Container from '../components/Container';

export const query = graphql`
  query pageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id}) {
      id
      title
      _rawExcerpt
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
       {page && (
         <>
           <h1 className="text-4xl font-black text-center pt-36 pb-16">
             {page.title}
           </h1>
           {page._rawExcerpt && <PortableText value={page._rawExcerpt} />}
         </>
       )}
       {errors && <div>{errors}</div>}
     </Container>
   </Layout>
 );
}


export default post
