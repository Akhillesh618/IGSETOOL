// reducers/auth.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from '../actions/auth';
  
  const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
  };
  
  export default function auth(state = initial
  