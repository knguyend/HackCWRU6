import React from 'react';
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

const SignIn = props => {
  return (
    <div className="signin">
      <h2>Sign In</h2>
      <form method="post" target="_blank" onsubmit="">
        <input type="text" name="input-email" id="input-email" />
        <label for="input-email">Email Address</label>
        <input type="password" name="input-password" id="input-password" />
        <label for="input-password">Password</label>
        <br />
        <br />
        <input type="submit" onClick={authenticate} />
      </form>
      <p>
        Dont have an account? Sign up{' '}
        <a href="http://twineSignUp.htm" target="_blank">
          here
        </a>
      </p>
    </div>
  );
};

export default SignIn;
