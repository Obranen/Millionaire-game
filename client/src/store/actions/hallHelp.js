import {
  HALL_HELP_CLICK,
  HALL_HELP_DELETE_CLICK,
  HALL_HELP_DISABLE_OTHER_CLICK,
  HALL_HELP_OTHER_CLICK_OK
} from "./actionTypes"

export const hallHelpClick = () => {
  return {
    type: HALL_HELP_CLICK
  }
}
export const hallHelpDeleteClick = () => {
  return {
    type: HALL_HELP_DELETE_CLICK
  }
}
export const hallHelpDisableOtherClick = () => {
  return {
    type: HALL_HELP_DISABLE_OTHER_CLICK
  }
}
export const hallHelpOtherClickOk = () => {
  return {
    type: HALL_HELP_OTHER_CLICK_OK
  }
}