import { signupRequest, signupSuccess, signupFailure } from 'app/auth/actions';

const signUp = ({ email, password, firstName, lastName, nick }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch(signupRequest());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return firestore
          .collection('user')
          .doc(response.user.uid)
          .set({
            firstName,
            lastName,
            email,
            nick
          });
      })
      .then(() => {
        dispatch(signupSuccess());
      })
      .catch(error => {
        dispatch(signupFailure(error));
      });
  };
};

export default signUp;

// import { signupRequest, signupSuccess, signupFailure } from 'app/auth/actions';

// const signUp = newUser => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     dispatch(signupRequest());
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(newUser.email, newUser.password)
//       .then(response => {
//         return firestore
//           .collection('user')
//           .doc(response.user.uid)
//           .set({
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
//           });
//       })
//       .then(() => {
//         dispatch(signupSuccess());
//       })
//       .catch(error => {
//         dispatch(signupFailure(error));
//       });
//   };
// };

// export default signUp;
