import {
  logoutRequest,
  logoutSuccess,
  logoutFailure
} from 'app/auth/actionCreators';

const logout = () => {
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

export default logout;
