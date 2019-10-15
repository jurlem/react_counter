import React, {Component} from 'react';

class Nav extends Component {
  render () {
    return (
      <nav className="navbar navbalr-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
          {' '}
          <span className="badge badge-bill badge-secondary">
            {this.props.totalCounters}
          </span>

        </a>
      </nav>
    );
  }
}

export default Nav;
