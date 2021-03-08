import {INFO_DISPLAY_SAVE_OFF, INFO_DISPLAY_SAVE_ON} from "../actions/actionTypes";

const initialState = {
  displaySave: true
}

export default function infoDisplayReducer(state = initialState, action) {
  switch (action.type) {
    case INFO_DISPLAY_SAVE_OFF: return  {
     ...state,
      displaySave: false
    }
    case INFO_DISPLAY_SAVE_ON: return  {
      ...state,
      displaySave: true
    }
    default: return state
  }
}