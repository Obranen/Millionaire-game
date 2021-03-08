import {THEME_STATE_OFF, THEME_STATE_ON} from "../actions/actionTypes"

const initialState = {
    themeState: false,
}

export default function switchReducer(state = initialState, action) {
    switch (action.type) {
        case THEME_STATE_OFF: return  {
            ...state,
            themeState: false
        }
        case THEME_STATE_ON: return  {
            ...state,
            themeState: true
        }
        default: return state
    }
}