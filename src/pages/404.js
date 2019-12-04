import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Components/Layout/Layout';
import Head from '../Components/Head/Head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
