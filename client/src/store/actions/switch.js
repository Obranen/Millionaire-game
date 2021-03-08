import {THEME_STATE_OFF, THEME_STATE_ON} from "./actionTypes"

export const themeStateOff = () => {
    return {
        type: THEME_STATE_OFF
    }
}

export const themeStateOn = () => {
    return {
        type: THEME_STATE_ON
    }
}