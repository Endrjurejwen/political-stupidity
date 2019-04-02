import { loginRequest, loginSuccess, loginFailure } from 'auth/actionCreators';

const login = credentails => {
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

export default login;
