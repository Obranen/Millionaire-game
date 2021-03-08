import {
  SHOW_TEXT_CONTENT,
  HIDE_TEXT_CONTENT,
  ONE_HELP_ON,
  ONE_HELP_OFF,
} from "../actions/actionTypes"

const initialState = {
  textContent: false,
  oneHelpPerTurn: false,
}

export default function assistReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_TEXT_CONTENT: return  {
      ...state,
      textContent: true
    }
    case HIDE_TEXT_CONTENT: return  {
      ...state,
      textContent: false
    }
    case ONE_HELP_ON: return  {
      ...state,
      oneHelpPerTurn: true
    }
    case ONE_HELP_OFF: return  {
      ...state,
      oneHelpPerTurn: false
    }
    default: return state
  }
}