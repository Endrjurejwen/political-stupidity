import firebase from 'config/fbConfig';

let ref = firebase.firestore().doc('users/123');
ref
  .get()
  .then(function(doc) {
    console.log(doc.data());
  })
  .catch(function(err) {
    console.error(err);
  });
