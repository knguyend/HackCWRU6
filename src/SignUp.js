import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const firebase = window.firebase;

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    contacts: '',
    signedIn: firebase.auth().getUid() ? true : false
  };

  handleChange = e => {
    const id = e.target.id
      .split('-')
      .map((word, index) =>
        index > 0 ? word[0].toUpperCase() + word.substring(1) : word
      )
      .join('');
    this.setState({ [id]: e.target.value });
  };

  handleSubmit = async e => {
    const { email, password, firstName, lastName, contacts } = this.state;
    e.preventDefault();
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // After user has been created in Firebase Auth, their info is created in Firestore
      const firestore = firebase.firestore();
      await firestore
        .collection('users')
        .doc(resp.user.uid)
        .set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0],
          contacts
        });

      // Push '/' to history to redirect to homepage after sign up is succesful
      this.props.history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    if (firebase.auth().getUid()) return <Redirect to='/' />
    if (this.state.signedIn) return <Redirect to="/" />;
    return (
      <div className="signup">
        <h2>Sign Up</h2>
        <form>
          <input
            type="text"
            name="input-first-name"
            id="first-name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="input-last-name"
            id="last-name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="email"
            name="input-email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="password"
            name="input-password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="input-contacts"
            id="contacts"
            value={this.state.contacts}
            onChange={this.handleChange}
          />
          <label htmlFor="contacts">Phone Number</label>
          <br />
          <br />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
        <p>
          Already signed up? Sign up <Link to="/sign-in">here</Link>
        </p>
      </div>
    );
  }
}
