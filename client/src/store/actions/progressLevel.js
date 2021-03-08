import {CURRENT_WINNINGS_RESTART, CURRENT_WINNINGS_SUM, FULL_WINNINGS_RESTART, FULL_WINNINGS_SUM,} from "./actionTypes"

export const currentWinningsSum = money => {
  return {
    type: CURRENT_WINNINGS_SUM,
    money
  }
}
export const fullWinningsSum = money => {
  return {
    type: FULL_WINNINGS_SUM,
    money
  }
}
export const currentWinningsRestart = () => {
  return {
    type: CURRENT_WINNINGS_RESTART
  }
}
export const fullWinningsRestart = () => {
  return {
    type: FULL_WINNINGS_RESTART
  }
}