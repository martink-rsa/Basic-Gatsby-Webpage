import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../Styles/index.scss';
import layoutStyles from './Layout.module.scss';

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
