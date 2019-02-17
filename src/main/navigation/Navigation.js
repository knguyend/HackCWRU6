import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = props => {
  // TODO(ML): Add back only show appropriate links when signed in
  //   const sideLinks = props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
  const sideLinks = true ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: '#507642' }}>
      <div className="container">
        <Link to="/" style={{ fontSize: 38, float: 'left' }}>
          <em>Twine</em>
        </Link>
        <ul>
          <li>
            <a
              to="/"
              className="btn btn-floating"
              style={{ backgroundColor: '#A37B45' }}
            >
              +
            </a>
          </li>
          <li>
            <input
              type="text"
              style={{ width: '100px' }}
              className="input"
              placeholder="Search..."
            />
          </li>
        </ul>
        {sideLinks}
      </div>
    </nav>
  );
};

export default NavBar;
