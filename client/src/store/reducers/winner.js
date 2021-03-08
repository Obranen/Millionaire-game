import {WINNER_PERSONAL_WIN, WINNER_TOP_WIN} from "../actions/actionTypes";

const initialState = {
  topWin: [],
  personalWin: [],
}

export default function winnerReducer(state = initialState, action) {
  switch (action.type) {
    case WINNER_TOP_WIN: return  {
     ...state,
      topWin: action.payload
    }
    case WINNER_PERSONAL_WIN: return  {
      ...state,
      personalWin: action.losing
    }
    default: return state
  }
}