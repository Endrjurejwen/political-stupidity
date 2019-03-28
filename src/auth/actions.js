import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signupRequest,
  signupSuccess,
  signupFailure
} from 'auth/actionCreators';

export const login = credentails => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(loginRequest());
    firebase
      .auth()
      .signInWithEmailAndPassword(credentails.email, credentails.password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(error => {
        dispatch(loginFailure(error));
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(logoutRequest());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch(error => {
        dispatch(logoutFailure(error));
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch(signupRequest());
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection('user')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
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
