import { loginRequest, loginSuccess, loginFailure } from 'app/auth/actions';

const login = credentails => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(loginRequest());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentails.email, credentails.password)
      .then(res => {
        dispatch(loginSuccess());
        return res;
      })
      .catch(error => {
        dispatch(loginFailure(error));
      });
  };
};

export default login;
