import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const firebase = window.firebase;

class SignedInLinks extends React.Component {
  state = {signedIn: firebase.auth().getUid() ? true : false}

  //  TECHDEBT(ML): This logic should not be here
  signOut = async () => {
    try {
      await firebase.auth().signOut();
      this.setState({signedIn: false});
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    if (!this.state.signedIn) return <Redirect to='/' />;
    return (
      <ul className="right">
        <li>
          <a onClick={this.signOut}>Sign Out</a>
        </li>
        <li>
          <NavLink
            to="/"
            className="btn btn-floating"
            style={{ backgroundColor: '#A37B45' }}
          >
            {'lamchiminhmark@gmail.com'.substring(0, 2).toUpperCase()}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
