import {WINNER_PERSONAL_WIN, WINNER_TOP_WIN} from "./actionTypes";

export const winnerTopWin = (payload) => {
  return {
    type: WINNER_TOP_WIN,
    payload
  }
}

export const winnerPersonalWin = (losing) => {
  return {
    type: WINNER_PERSONAL_WIN,
    losing
  }
}