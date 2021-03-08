import {
  CURRENT_WINNINGS_RESTART,
  CURRENT_WINNINGS_SUM, FULL_WINNINGS_RESTART,
  FULL_WINNINGS_SUM,
} from "../actions/actionTypes"

const initialState = {
  levels: [
    {
      level: 1,
      text: 100
    },
    {
      level: 2,
      text: 200
    },
    {
      level: 3,
      text: 300
    },
    {
      level: 4,
      text: 500
    },
    {
      level: 5,
      text: 1000
    },
    {
      level: 6,
      text: 2000
    },
    {
      level: 7,
      text: 4000
    },
    {
      level: 8,
      text: 8000
    },
    {
      level: 9,
      text: 16000
    },
    {
      level: 10,
      text: 32000
    },
    {
      level: 11,
      text: 64000
    },
    {
      level: 12,
      text: 120000
    },
    {
      level: 13,
      text: 250000
    },
    {
      level: 14,
      text: 500000
    },
    {
      level: 15,
      text: 1000000
    },

  ],
  currentWinningsMoney: 0,
  fullWinningsMoney: null,
}

export default function progressLevelReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_WINNINGS_SUM: return  {
      ...state,
      currentWinningsMoney: action.money
    }
    case CURRENT_WINNINGS_RESTART: return  {
      ...state,
      currentWinningsMoney: 0
    }
    case FULL_WINNINGS_SUM: return  {
      ...state,
      fullWinningsMoney: action.money
    }
    case FULL_WINNINGS_RESTART: return  {
      ...state,
      fullWinningsMoney: null
    }
    default: return state
  }
}