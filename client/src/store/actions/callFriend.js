import {
  CALL_FRIEND_CLICK,
  CALL_FRIEND_DELETE_CLICK,
  CALL_FRIEND_DISABLE_OTHER_CLICK,
  CALL_FRIEND_OTHER_CLICK_ON
} from "./actionTypes"

export const callFriendClick = () => {
  return {
    type: CALL_FRIEND_CLICK
  }
}
export const callFriendDeleteClick = () => {
  return {
    type: CALL_FRIEND_DELETE_CLICK
  }
}
export const callFriendDisableOtherClick = () => {
  return {
    type: CALL_FRIEND_DISABLE_OTHER_CLICK
  }
}
export const callFriendOtherClickOn = () => {
  return {
    type: CALL_FRIEND_OTHER_CLICK_ON
  }
}