import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  RESET_AUTH_ERROR
} from 'app/auth/actionTypes';

// LOGIN
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

// LOGOUT
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: LOGOUT_FAILURE,
  error
});

// SIGNUP
export const signupRequest = () => ({
  type: SIGNUP_REQUEST
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  error
});

// RESET ERROR
export const resetAuthError = () => ({
  type: RESET_AUTH_ERROR
});

export default resetAuthError;
