import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const firebase = window.firebase;

class NavBar extends React.Component {
  state = { searchKey: '' };

  handleSubmit = e => {
    e && e.preventDefault();
    this.props.setItems(this.state.searchKey);
  };

  handleChange = e => {
    this.setState({ searchKey: e.target.value });
  };

  checkEnter = e => {
    if (e.keyCode === 13) this.handleSubmit(e);
  };
  // TODO(ML): Add back only show appropriate links when signed in
  //   const sideLinks = props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
  render() {
    const sideLinks = firebase.auth().getUid() ? (
      <SignedInLinks />
    ) : (
      <SignedOutLinks />
    );
    return (
      <nav className="nav-wrapper" style={{ backgroundColor: '#507642' }}>
        <div className="container">
          <Link
            // TECHDEBT(ML): Link element should not have this onclick to erase searchKey
            onClick={() =>
              this.setState({ searchKey: '' }, () => this.handleSubmit())
            }
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
              <button
                to="/"
                className="btn btn-floating"
                style={{ backgroundColor: '#A37B45', fontSize: 34 }}
                onClick={this.props.handleClickPost}
              >
                +
              </button>
            </li>
            <li>
              <input
                onChange={this.handleChange}
                placeholder="Search..."
                onKeyUp={this.checkEnter}
                value={this.state.searchKey}
                style={{ width: '300px', color: 'white' }}
              />
            </li>
            <li>
              <button
                className="btn"
                style={{ margin: '10px' }}
                onClick={this.handleSubmit}
              >
                Go
              </button>
            </li>
          </ul>
          {sideLinks}
        </div>
      </nav>
    );
  }
}

export default NavBar;
