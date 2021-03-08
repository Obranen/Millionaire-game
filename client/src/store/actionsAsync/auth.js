import axios from "axios";
import {authErrorSignIn, authErrorSignUp, isAuthenticated} from "../actions/auth";

export const register = data => {
  return async (dispatch) => {
    const url = '/api/auth/registration'
    try {
      await axios.post(url, data)
      dispatch(login(data))
    } catch (e) {
      if (e.response.data.errors !== undefined) {
        dispatch(authErrorSignUp(e.response.data.errors.errors[0].msg))
      } else {
        dispatch(authErrorSignUp(e.response.data.message))
      }
    }
  }
}

export const login = data => {
  return async (dispatch) => {
    const url = '/api/auth/login'
    try {
      const response = await axios.post(url, data)
      dispatch(isAuthenticated())
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      dispatch(authErrorSignIn(e.response.data.message))
    }
  }
}

export const auth = () => {
  return async (dispatch) => {
    const url = '/api/auth/auth'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      dispatch(isAuthenticated())
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      console.log(e.response.data.message)
      localStorage.removeItem('token')
    }

  }
}