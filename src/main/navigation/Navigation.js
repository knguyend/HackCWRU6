import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

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
  render() {
    // TODO(ML): Add back only show appropriate links when signed in
    //   const sideLinks = props.loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
    const sideLinks = true ? <SignedInLinks /> : <SignedOutLinks />;
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
              <a
                to="/"
                className="btn btn-floating"
                style={{ backgroundColor: '#A37B45', fontSize: 34  }}
              >
                +
              </a>
            </li>
            <li>
              <input
                ref="srch"
                type="search"
                id="search"
                onChange={this.handleChange}
                placeholder="Search..."
                style={{ width: '300px', color: 'white' }}
                onKeyUp={this.checkEnter}
                value={this.state.searchKey}
              />
            </li>
            <li>
              <button onClick={this.handleSubmit}>Go</button>
              {/* <input
              type="text"
              className="input"
              placeholder="Search..."
            /> */}
            </li>
          </ul>
          {sideLinks}
        </div>
      </nav>
    );
  }
}
export default NavBar;
