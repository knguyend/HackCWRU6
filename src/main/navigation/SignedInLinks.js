import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <a onClick={() => alert('this has not been implemented yet')}>
          Sign Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating" style={{backgroundColor: '#A37B45'}}>
          {'lamchiminhmark@gmail.com'.substring(0, 2).toUpperCase()}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
