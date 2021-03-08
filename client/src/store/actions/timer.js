import {SECONDS_DECREMENT, TIMER_ON, TIMER_STOP, UPDATE_TIMER} from "./actionTypes"

export const secondsDecrement = () => {
  return {
    type: SECONDS_DECREMENT
  }
}
export const timerOn = () => {
  return {
    type: TIMER_ON
  }
}

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  }
}

export const timerStop = () => {
  return {
    type: TIMER_STOP
  }
}