import React from 'react';
import { graphql } from 'gatsby';
import DOMPurify from 'dompurify';

import Layout from '../Components/Layout/Layout';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  const htmlContent = props.data.markdownRemark.html;
  const sanitize = DOMPurify.sanitize;
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: sanitize(htmlContent) }}></div>
    </Layout>
  );
};

export default Blog;
