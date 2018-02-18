// @flow
import React from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';


const Header = () => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        Prag
      </div>
      <nav>
        <a className="active" href="/">Trending</a>
        <a href="/">Latest article</a>
        <a href="/">Tag</a>
      </nav>
      <div className="right">
        right side
      </div>
    </Responsive>
  </header>
);

export default Header;
