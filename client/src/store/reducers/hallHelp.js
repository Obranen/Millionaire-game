import {
  HALL_HELP_CLICK,
  HALL_HELP_DELETE_CLICK, HALL_HELP_DISABLE_OTHER_CLICK, HALL_HELP_OTHER_CLICK_OK,
} from "../actions/actionTypes"

const initialState = {
  hallHelp: false,
  hallHelpDisable: false,
}

export default function hallHelpReducer(state = initialState, action) {
  switch (action.type) {
    case HALL_HELP_CLICK: return  {
      ...state,
      hallHelp: true
    }
    case HALL_HELP_DELETE_CLICK: return  {
      ...state,
      hallHelp: false
    }
    case HALL_HELP_DISABLE_OTHER_CLICK: return  {
      ...state,
      hallHelpDisable: true
    }
    case HALL_HELP_OTHER_CLICK_OK: return  {
      ...state,
      hallHelpDisable: false
    }
    default: return state
  }
}