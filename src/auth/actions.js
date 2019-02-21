export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const login = credentails => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentails.email, credentails.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', error });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

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
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(error => {
        dispatch({ type: 'SIGNUP_ERROR', error });
      });
  };
};
