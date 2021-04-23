import {DOWNLOADED_DATA_OFF, WINNER_PERSONAL_WIN, WINNER_TOP_WIN} from "../actions/actionTypes";

const initialState = {
  topWin: [],
  personalWin: [],
  downloadedData: true,
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
    case DOWNLOADED_DATA_OFF: return  {
      ...state,
      downloadedData: false
    }
    default: return state
  }
}