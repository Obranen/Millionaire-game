import {combineReducers} from 'redux'
import switchReducer from "./switch"
import quizReducer from "./quiz"
import progressLevelReducer from "./progressLevel"
import assistReducer from "./assist"
import callFriendReducer from "./callFriend"
import fiftyReducer from "./fifty"
import hallHelpReducer from "./hallHelp"
import timerReducer from "./timer"
import welcomeReducer from "./welcome"
import authReducer from "./auth"
import infoDisplayReducer from "./infoDisplay"
import winnerReducer from "./winner"

export default combineReducers ({
    switchReducer,
    quizReducer,
    progressLevelReducer,
    assistReducer,
    callFriendReducer,
    fiftyReducer,
    hallHelpReducer,
    timerReducer,
    welcomeReducer,
    authReducer,
    infoDisplayReducer,
    winnerReducer,
})