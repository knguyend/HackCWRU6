import React from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { Firestore, FirestoreDocument } from 'react-firestore';

const firebase = window.firebase;

class SignedInLinks extends React.Component {
  // state = {signedIn: firebase.auth().getUid() ? true : false}

  //  TECHDEBT(ML): This logic should not be here
  signOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  render() {
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
            <FirestoreDocument
              path={`users/${firebase.auth().getUid()}`}
              render={({ isLoading, data }) => (isLoading ? '' : data.initials)}
            />
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default withRouter(SignedInLinks);
