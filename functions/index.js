const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const addItem = item => {
console.log(item);
  return admin
    .firestore()
    .collection('items')
    .add(item)
    .then(doc => console.log('notification added', doc));
};

exports.addItem = functions.https.onRequest((request, response) => {
//   const itemName = request.query.itemName;
  return addItem(request.query).then(() => response.end('200'));
});
