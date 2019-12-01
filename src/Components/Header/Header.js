import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <h1>Website Name</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
