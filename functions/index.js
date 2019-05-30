const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase_tools = require('firebase-tools');

admin.initializeApp(functions.config().firebase);

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
    const path = data.path;
    console.log(
      `User ${context.auth.uid} has requested to delete path ${path}`
    );

    return firebase_tools.firestore
      .delete(path, {
        project: process.env.GCLOUD_PROJECT,
        recursive: true,
        yes: true
      })
      .then(() => {
        return {
          path: path
        };
      });
  });
