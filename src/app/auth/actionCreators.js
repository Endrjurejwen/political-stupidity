import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'app/auth/actionTypes';

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
