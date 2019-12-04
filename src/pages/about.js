import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Components/Layout/Layout';
import Head from '../Components/Head/Head';

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <p>This page is about NAME</p>
    <p>Second paragraph for describing NAME</p>
    <p>
      Contact me at <Link to="/contact">this page.</Link>
    </p>
  </Layout>
);

export default AboutPage;
