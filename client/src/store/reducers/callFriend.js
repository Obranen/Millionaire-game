import {
  CALL_FRIEND_CLICK, CALL_FRIEND_DELETE_CLICK, CALL_FRIEND_DISABLE_OTHER_CLICK, CALL_FRIEND_OTHER_CLICK_ON,
} from "../actions/actionTypes"

const initialState = {
  callFriend: false,
  callFriendDisable: false,
}

export default function callFriendReducer(state = initialState, action) {
  switch (action.type) {
    case CALL_FRIEND_CLICK: return  {
      ...state,
      callFriend: true
    }
    case CALL_FRIEND_DELETE_CLICK: return  {
      ...state,
      callFriend: false
    }
    case CALL_FRIEND_DISABLE_OTHER_CLICK: return  {
      ...state,
      callFriendDisable: true
    }
    case CALL_FRIEND_OTHER_CLICK_ON: return  {
      ...state,
      callFriendDisable: false
    }
    default: return state
  }
}