import React from 'react';
import { Link } from 'gatsby';
import '../Styles/index.css';

import Layout from '../Components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <h2>My first Gatsby page</h2>
      <p>
        Contact me at <Link to="/contact">this page.</Link>
      </p>
      <p>
        My about page is available <Link to="/about">here.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
