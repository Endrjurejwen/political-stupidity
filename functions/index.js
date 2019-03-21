const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase_tools = require('firebase-tools');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addedComments = functions.firestore
  .document('quotes/{quotationId}/comments/{commentId}')
  .onCreate((snap, context) => {
    const quotationId = context.params.quotationId;
    const quotationRef = admin
      .firestore()
      .collection('quotes')
      .doc(quotationId);

    return quotationRef.get().then(snap => {
      const commentsCount = snap.data().commentsCount + 1;
      const data = { commentsCount };
      return quotationRef.update(data);
      // .then(doc => console.log('comment agregate'));
    });
  });

exports.removedComments = functions.firestore
  .document('quotes/{quotationId}/comments/{commentId}')
  .onDelete((snap, context) => {
    const quotationId = context.params.quotationId;
    const quotationRef = admin
      .firestore()
      .collection('quotes')
      .doc(quotationId);

    return quotationRef.get().then(snap => {
      if (!snap.data()) {
        return null;
      }
      const commentsCount = snap.data().commentsCount - 1;
      const data = { commentsCount };
      return quotationRef.update(data);
    });
  });

exports.addedCommentsCounter = functions.firestore
  .document('quotes/{quotationId}/comments/{commentId}')
  .onCreate((snap, context) => {
    const quotationRef = admin
      .firestore()
      .collection('counters')
      .doc('comments');

    return quotationRef.get().then(snap => {
      const number = snap.data().number + 1;
      return quotationRef.update({ number });
    });
  });

exports.removedCommentsCounter = functions.firestore
  .document('quotes/{quotationId}/comments/{commentId}')
  .onDelete((snap, context) => {
    const quotationRef = admin
      .firestore()
      .collection('counters')
      .doc('comments');

    return quotationRef.get().then(snap => {
      const number = snap.data().number - 1;
      return quotationRef.update({ number });
    });
  });

exports.addedQuotesCounter = functions.firestore
  .document('quotes/{quotationId}')
  .onCreate((snap, context) => {
    const quotationRef = admin
      .firestore()
      .collection('counters')
      .doc('quotes');

    return quotationRef.get().then(snap => {
      const number = snap.data().number + 1;
      return quotationRef.update({ number });
    });
  });

exports.removedQuotesCounter = functions.firestore
  .document('quotes/{quotationId}')
  .onDelete((snap, context) => {
    const quotationRef = admin
      .firestore()
      .collection('counters')
      .doc('quotes');

    return quotationRef.get().then(snap => {
      const number = snap.data().number - 1;
      return quotationRef.update({ number });
    });
  });

// Delete Subcollections
exports.recursiveDelete = functions
  .runWith({
    timeoutSeconds: 100, // 540 default
    memory: '2GB'
  })
  .https.onCall((data, context) => {
    // Only allow admin users to execute this function.
    // if (!(context.auth && context.auth.token && context.auth.token.admin)) {
    //   throw new functions.https.HttpsError(
    //     'permission-denied',
    //     'Must be an administrative user to initiate delete.'
    //   );
    // }

    const path = data.path;
    console.log(
      `User ${context.auth.uid} has requested to delete path ${path}`
    );

    // Run a recursive delete on the given document or collection path.
    // The 'token' must be set in the functions config, and can be generated
    // at the command line by running 'firebase login:ci'.
    return firebase_tools.firestore
      .delete(path, {
        project: process.env.GCLOUD_PROJECT,
        recursive: true,
        yes: true
        // token: functions.config().firebase.token
      })
      .then(() => {
        return {
          path: path
        };
      });
  });
