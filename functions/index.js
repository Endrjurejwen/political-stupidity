const functions = require('firebase-functions');
const admin = require('firebase-admin');

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
      const commentsCount = snap.data().commentsCount - 1;
      const data = { commentsCount };
      return quotationRef.update(data);
    });
  });
