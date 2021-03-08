import {START_BUTTON_HIDE, START_BUTTON_SHOW} from "../actions/actionTypes"

const initialState = {
  startButtonState: true,
}

export default function welcomeReducer(state = initialState, action) {
  switch (action.type) {
    case START_BUTTON_HIDE: return  {
      ...state,
      startButtonState: false,
    }
    case START_BUTTON_SHOW: return  {
      ...state,
      startButtonState: true,
    }
    default: return state
  }
}