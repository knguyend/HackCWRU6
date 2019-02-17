import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const firebase = window.firebase;

const NavBar = props => {
  // TODO(ML): Add back only show appropriate links when signed in
  //   const sideLinks = props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
  const sideLinks = firebase.auth().getUid() ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: '#507642' }}>
      <div className="container">
        <Link
          className="site-title"
          to="/"
          style={{
            fontSize: 60,
            float: 'left',
            fontFamily: 'Rochester, cursive'
          }}
        >
          twine
        </Link>
        <ul>
          <li>
            <a
              to="/"
              className="btn btn-floating"
              style={{ backgroundColor: '#A37B45', fontSize: 34 }}
            >
              +
            </a>
          </li>
          <li>
            <input
              type="text"
              style={{ width: '300px', color: 'white' }}
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
