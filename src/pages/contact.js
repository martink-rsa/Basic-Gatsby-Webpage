import React from 'react';

import Layout from '../Components/Layout/Layout';

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <p>Contact CONTACT NAME from details below.</p>
    <p>
      My GitHub page is{' '}
      <a
        href="http://www.github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here.
      </a>
    </p>
  </Layout>
);

export default ContactPage;
