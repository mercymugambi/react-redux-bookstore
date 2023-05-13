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
          <Link className="BOOKS" to="/">BOOKS</Link>
          <Link className="CATEGORIES" to="/categories">CATEGORIES</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
