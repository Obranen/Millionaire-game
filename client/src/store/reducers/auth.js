import {
  AUTH_ERROR_SIGN_IN, AUTH_ERROR_SIGN_IN_CLEAR,
  AUTH_ERROR_SIGN_UP, AUTH_ERROR_SIGN_UP_CLEAR,
  AUTH_IS_AUTHENTICATED,
  AUTH_OUT_AUTHENTICATED
} from "../actions/actionTypes"

const initialState = {
  authenticated: false,
  errorSignUp: '',
  errorSignIn: '',
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_OUT_AUTHENTICATED: return  {
      ...state,
      authenticated: false
    }
    case AUTH_IS_AUTHENTICATED: return  {
      ...state,
      authenticated: true
    }
    case AUTH_ERROR_SIGN_UP: return  {
      ...state,
      errorSignUp: action.error
    }
    case AUTH_ERROR_SIGN_UP_CLEAR: return  {
      ...state,
      errorSignUp: ''
    }
    case AUTH_ERROR_SIGN_IN: return  {
      ...state,
      errorSignIn: action.error
    }
    case AUTH_ERROR_SIGN_IN_CLEAR: return  {
      ...state,
      errorSignIn: ''
    }

    default: return state
  }
}