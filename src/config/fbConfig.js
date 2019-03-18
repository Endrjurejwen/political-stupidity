import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCuYdIyqrcEKD7RNOoyM9JRf1AoZOv6LOQ',
  authDomain: 'political-stupidity.firebaseapp.com',
  databaseURL: 'https://political-stupidity.firebaseio.com',
  projectId: 'political-stupidity',
  storageBucket: 'political-stupidity.appspot.com',
  messagingSenderId: '726492722857'
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// function loginWithGoogle(event) {
//   let provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithRedirect(provider);
// }

export default firebase;
