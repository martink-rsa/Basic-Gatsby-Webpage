import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../Components/Layout/Layout';
import blogStyles from '../pages/blog.module.scss';

//
// Goal: Link to the blog posts
//
// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work!

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => (
          <li className={blogStyles.post} key={edge.node.id}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
