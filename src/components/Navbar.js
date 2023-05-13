import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="panel-bg">
        <span className="Bookstore-CMS Text-Style-3">
          Bookstore CMS
        </span>
        <ul className="navLinks">
          <Link className="links" to="/">BookList</Link>
          <Link className="links" to="/categories">Categories</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
