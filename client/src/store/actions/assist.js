import {
  SHOW_TEXT_CONTENT,
  HIDE_TEXT_CONTENT,
  ONE_HELP_ON,
  ONE_HELP_OFF,
} from "./actionTypes"

export const showTextContent = () => {
  return {
    type: SHOW_TEXT_CONTENT
  }
}
export const hideTextContent = () => {
  return {
    type: HIDE_TEXT_CONTENT
  }
}
export const oneHelpOn = () => {
  return {
    type: ONE_HELP_ON
  }
}
export const oneHelpOff = () => {
  return {
    type: ONE_HELP_OFF
  }
}