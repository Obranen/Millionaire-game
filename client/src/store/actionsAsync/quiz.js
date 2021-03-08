import axios from "axios";
import {quizGetAllQuiz} from "../actions/quiz";

export const createQuiz = (data)  => {
  return async (dispatch) => {
    const url = '/api/admin/quiz/create'
    try {
      await axios.post(url, data)
      dispatch(getAllQuizzes())
    } catch (e) {
      console.log(e.response.data.message)
    }

  }
}

export const getAllQuizzes = () => {
  return async (dispatch) => {
    const url = '/api/admin/quiz'
    try {
      const response = await axios.get(url)
      dispatch(quizGetAllQuiz(response.data.quiz))
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const deleteQuizQuestion = id => {
  return async () => {
    const url = `/api/admin/quiz/delete/${id}`
    try {
      await axios.delete(url)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const updateQuiz = quiz => {
  return async () => {
    const url = '/api/admin/quiz/update'
    try {
      await axios.put(url, quiz)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}