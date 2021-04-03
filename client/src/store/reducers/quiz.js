import {
  ADD_RIGHT_ANSWER_LETTER,
  NEXT_QUESTION,
  LOSING_ON,
  LOSING_OFF,
  RESTART_QUESTION,
  WINNER_ON,
  WINNER_OFF,
  QUIZ_ADD_CURRENT_ID,
  QUIZ_GET_ALL_QUIZ,
  QUIZ_STATE_EDIT_OFF,
  QUIZ_CLICK_ON_BUTTON_EDIT_OFF,
  QUIZ_UPDATE_TABLE_OFF,
  QUIZ_ADD_RANDOM_QUIZ, PRELOADING_ON, PRELOADING_OFF,
} from "../actions/actionTypes"

const initialState = {
  quiz: [],
  randomQuiz: [],
  currentQuestion: 0,
  winner: false,
  rightAnswerLetter: null,
  losing: false,
  quizCurrentID: '',
  quizStateEdit: false,
  clickOnButtonEdit: false,
  updateTableQuiz: false,
  preloading: false,
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case QUIZ_CLICK_ON_BUTTON_EDIT_OFF: return  {
      ...state,
      clickOnButtonEdit: false,
      updateTableQuiz: true,
    }
    case QUIZ_UPDATE_TABLE_OFF: return  {
      ...state,
      updateTableQuiz: false,
    }
    case QUIZ_GET_ALL_QUIZ: return  {
      ...state,
      quiz: action.quizzes
    }
    case QUIZ_ADD_RANDOM_QUIZ: return  {
      ...state,
      randomQuiz: action.quizzes
    }
    case QUIZ_ADD_CURRENT_ID: return  {
      ...state,
      quizStateEdit: true,
      clickOnButtonEdit: true,
      quizCurrentID: action.quizId
    }
    case QUIZ_STATE_EDIT_OFF: return  {
      ...state,
      quizStateEdit: false,
    }
    case NEXT_QUESTION: return  {
      ...state,
      currentQuestion: state.currentQuestion + 1
    }
    case RESTART_QUESTION: return  {
      ...state,
      currentQuestion: 0
    }
    case WINNER_ON: return  {
      ...state,
      winner: true
    }
    case WINNER_OFF: return  {
      ...state,
      winner: false
    }
    case ADD_RIGHT_ANSWER_LETTER: return  {
      ...state,
      rightAnswerLetter: action.letter
    }
    case LOSING_ON: return  {
      ...state,
      losing: true
    }
    case LOSING_OFF: return  {
      ...state,
      losing: false
    }
    case PRELOADING_ON: return  {
      ...state,
      preloading: true
    }
    case PRELOADING_OFF: return  {
      ...state,
      preloading: false
    }
    default: return state
  }
}