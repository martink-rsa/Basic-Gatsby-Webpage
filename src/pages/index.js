import React from 'react';
import { Link } from 'gatsby';
import '../Styles/index.scss';

import Layout from '../Components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm a basic webpage made using Gatsby, a React-based static site
        generator.
      </h2>
      <p>
        Contact me? Visit <Link to="/contact">this page.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
