import {
  ADD_RIGHT_ANSWER_LETTER,
  NEXT_QUESTION,
  LOSING_ON,
  LOSING_OFF,
  RESTART_QUESTION,
  WINNER_ON,
  WINNER_OFF,
  QUIZ_ADD_CURRENT_ID,
  QUIZ_STATE_EDIT_OFF,
  QUIZ_GET_ALL_QUIZ,
  QUIZ_CLICK_ON_BUTTON_EDIT_OFF,
  QUIZ_UPDATE_TABLE_OFF, QUIZ_ADD_RANDOM_QUIZ, PRELOADING_OFF, PRELOADING_ON
} from "./actionTypes"

export const quizClickOnButtonEditOff = () => {
  return {
    type: QUIZ_CLICK_ON_BUTTON_EDIT_OFF,
  }
}
export const quizUpdateTableOff = () => {
  return {
    type: QUIZ_UPDATE_TABLE_OFF,
  }
}
export const quizGetAllQuiz = quizzes => {
  return {
    type: QUIZ_GET_ALL_QUIZ,
    quizzes
  }
}
export const quizAddRandomQuiz = quizzes => {
  return {
    type: QUIZ_ADD_RANDOM_QUIZ,
    quizzes
  }
}
export const quizAddCurrentId = quizId => {
  return {
    type: QUIZ_ADD_CURRENT_ID,
    quizId
  }
}
export const quizStateEditOff = () => {
  return {
    type: QUIZ_STATE_EDIT_OFF
  }
}
export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  }
}
export const restartQuestion = () => {
  return {
    type: RESTART_QUESTION
  }
}
export const winnerOn = () => {
  return {
    type: WINNER_ON
  }
}
export const winnerOff = () => {
  return {
    type: WINNER_OFF
  }
}
export const addRightAnswerLetter = letter => {
  return {
    type: ADD_RIGHT_ANSWER_LETTER,
    letter
  }
}
export const losingOn = () => {
  return {
    type: LOSING_ON
  }
}
export const losingOff = () => {
  return {
    type: LOSING_OFF
  }
}
export const preloadingOn = () => {
  return {
    type: PRELOADING_ON
  }
}
export const preloadingOff = () => {
  return {
    type: PRELOADING_OFF
  }
}