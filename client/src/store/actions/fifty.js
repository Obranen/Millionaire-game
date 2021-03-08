import {FIFTY_CLICK, FIFTY_DELETE_CLICK, FIFTY_DISABLE_OTHER_CLICK, FIFTY_OTHER_CLICK_ON} from "./actionTypes"

export const fiftyClick = () => {
  return {
    type: FIFTY_CLICK
  }
}
export const fiftyDisableOtherClick = () => {
  return {
    type: FIFTY_DISABLE_OTHER_CLICK
  }
}
export const fiftyOtherClickOn = () => {
  return {
    type: FIFTY_OTHER_CLICK_ON
  }
}
export function fiftyDeleteClick() {
  return {
    type: FIFTY_DELETE_CLICK
  }
}