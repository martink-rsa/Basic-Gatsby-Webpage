import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../Components/Layout/Layout';
import blogStyles from '../pages/blog.module.scss';
import Head from '../Components/Head/Head';

// Goal: Render Contenful Posts
//
// 1. Swap out the markdown query with the contentful query
// 2. Update the component to render the new data
//    - Don't worry if the link links to a non-existent page
// 3. Test your work!

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post} key={edge.node.id}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
