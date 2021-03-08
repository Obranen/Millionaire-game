import {
  FIFTY_CLICK,
  FIFTY_DELETE_CLICK,
  FIFTY_DISABLE_OTHER_CLICK, FIFTY_OTHER_CLICK_ON,
} from "../actions/actionTypes"

const initialState = {
  fiftyState: false,
  fiftyDisable: false,
}

export default function fiftyReducer(state = initialState, action) {
  switch (action.type) {
    case FIFTY_CLICK: return  {
      ...state,
      fiftyState: true
    }
    case FIFTY_DELETE_CLICK: return  {
      ...state,
      fiftyState: false
    }
    case FIFTY_DISABLE_OTHER_CLICK: return  {
      ...state,
      fiftyDisable: true
    }
    case FIFTY_OTHER_CLICK_ON: return  {
      ...state,
      fiftyDisable: false
    }
    default: return state
  }
}