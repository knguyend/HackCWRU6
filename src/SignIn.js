import React from 'react';
import { Redirect } from 'react-router-dom';
const firebase = window.firebase;

const authenticate = e => {
  e.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword('coltonpotter48@yahoo.com', 'whatevershit')
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  console.log(e.target);
};

export default class SignIn extends React.Component {
  state = {email: '', password: '', signedIn: firebase.auth().getUid() ? true : false}

  handleChange = field => e => {
    this.setState({[field]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.setState({signedIn: true}))
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });
  }

  render() {
    const {email, password} = this.state;
    if (this.state.signedIn) return <Redirect to="/" />;
    return (
      <div className="signin">
        <h2>Sign In</h2>
        <form>
          <input type="text" name="input-email" id="input-email" value={email} onChange={this.handleChange('email')}/>
          <label htmlFor="input-email">Email Address</label>
          <input type="password" name="input-password" id="input-password" value={password} onChange={this.handleChange('password')}/>
          <label htmlFor="input-password">Password</label>
          <br />
          <br />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
        <p>
          Dont have an account? Sign up{' '}
          <a href="http://twineSignUp.htm" target="_blank">
            here
          </a>
        </p>
      </div>
    );
  }
}
