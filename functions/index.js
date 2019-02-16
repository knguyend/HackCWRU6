const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
admin.initializeApp(functions.config().firebase);

var config = {
  apiKey: 'AIzaSyDbJE9Wer9vcQUOajs-AqIRQLCj9ZxnPdg',
  authDomain: 'twine-788ae.firebaseapp.com',
  databaseURL: 'https://twine-788ae.firebaseio.com',
  storageBucket: 'twine-788ae.appspot.com'
};
firebase.initializeApp(config);

const addItem = item => {
  console.log(item);
  return admin
    .firestore()
    .collection('items')
    .add(item)
    .then(doc => console.log('notification added', doc));
};

const testUser = ({ email, password }) => {
  console.log(email);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log(error.message);
    });
};

exports.addItem = functions.https.onRequest((request, response) => {
  //   const itemName = request.query.itemName;
  return addItem(request.query).then(() => response.end('200'));
});

exports.testUser = functions.https.onRequest((req, res) => {
  console.log('Request is ' + req);
  return testUser(req.query).then(() => res.end('200'));
});
