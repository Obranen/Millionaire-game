import {
  AUTH_ERROR_SIGN_IN, AUTH_ERROR_SIGN_IN_CLEAR,
  AUTH_ERROR_SIGN_UP,
  AUTH_ERROR_SIGN_UP_CLEAR,
  AUTH_IS_AUTHENTICATED,
  AUTH_OUT_AUTHENTICATED
} from "./actionTypes"

export const outAuthenticated = () => {
  return {
    type: AUTH_OUT_AUTHENTICATED
  }
}

export const isAuthenticated = () => {
  return {
    type: AUTH_IS_AUTHENTICATED
  }
}

export const authErrorSignUpClear = () => {
  return {
    type: AUTH_ERROR_SIGN_UP_CLEAR
  }
}

export const authErrorSignUp = (error) => {
  return {
    type: AUTH_ERROR_SIGN_UP,
    error
  }
}
export const authErrorSignIn = (error) => {
  return {
    type: AUTH_ERROR_SIGN_IN,
    error
  }
}

export const authErrorSignInClear = () => {
  return {
    type: AUTH_ERROR_SIGN_IN_CLEAR
  }
}