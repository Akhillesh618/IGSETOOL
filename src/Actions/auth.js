// actions/auth.js

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function login(email, password) {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
}

export function register(email, password, name) {
  return {
    type: REGISTER_REQUEST,
    payload: { email, password, name },
  };
}
