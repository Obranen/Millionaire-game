import axios from "axios";
import {winnerPersonalWin, winnerTopWin} from "../actions/winner";

export const getDataWinner = () => {
  return async (dispatch) => {
    const url = '/api/winners'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      const user = response.data.user
      dispatch(winnerTopWin(user))
      const dataLosing = response.data.losing
      dispatch(winnerPersonalWin(dataLosing))
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const deleteWinnings = id => {
  return async () => {
    const url = `/api/winners/delete/${id}`
    try {
      await axios.delete(url)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const saveGameWin = (money) => {
  return async () => {
    const url = '/api/winners/win'
    try {
      let data = {}
      data.token = localStorage.getItem('token')
      data.money = money
      await axios.put(url, data)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const saveGameLost = (money) => {
  return async () => {
    const url = '/api/winners/lost'
    try {
      let data = {}
      data.token = localStorage.getItem('token')
      data.money = money
      await axios.post(url, data)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}