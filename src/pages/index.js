import React from 'react';
import { Link } from 'gatsby';
import '../Styles/index.scss';

import Layout from '../Components/Layout/Layout';
import Head from '../Components/Head/Head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>
        I&apos;m a basic webpage made using Gatsby, a React-based static site
        generator.
      </h2>
      <p>
        Contact me? Visit <Link to="/contact">this page.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
