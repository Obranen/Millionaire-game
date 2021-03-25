import {SECONDS_DECREMENT, TIMER_HIDE, TIMER_ON, TIMER_STOP, UPDATE_TIMER} from "../actions/actionTypes"

const SECONDS_NUMBER = 60
const SECONDS_DECREMENT_NUMBER = 1

const initialState = {
  seconds: SECONDS_NUMBER,
  timerState: false,
  timerHide: false,
}

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case SECONDS_DECREMENT: return  {
      ...state,
      seconds: state.seconds - SECONDS_DECREMENT_NUMBER,
    }
    case UPDATE_TIMER: return  {
      ...state,
      seconds: SECONDS_NUMBER,
    }
    case TIMER_ON: return  {
      ...state,
      timerState: true,
      timerHide: false,
    }
    case TIMER_STOP: return  {
      ...state,
      timerState: false,
    }
    case TIMER_HIDE: return  {
      ...state,
      timerHide: true,
    }
    default: return state
  }
}