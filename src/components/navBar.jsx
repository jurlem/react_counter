import React from 'react';

const Nav = props => {
  return (
    <nav className="navbar navbalr-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar
        <span className="badge badge-bill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Nav;
