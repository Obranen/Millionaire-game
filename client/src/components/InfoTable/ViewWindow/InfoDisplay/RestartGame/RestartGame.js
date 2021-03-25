import React from 'react'
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {losingOff, restartQuestion, winnerOff} from "../../../../../store/actions/quiz"
import {currentWinningsSum, fullWinningsRestart} from "../../../../../store/actions/progressLevel"
import {oneHelpOff} from "../../../../../store/actions/assist"
import {updateTimer} from "../../../../../store/actions/timer"
import {fiftyDeleteClick, fiftyOtherClickOn} from "../../../../../store/actions/fifty"
import {hallHelpDeleteClick, hallHelpOtherClickOk} from "../../../../../store/actions/hallHelp"
import {callFriendDeleteClick, callFriendOtherClickOn} from "../../../../../store/actions/callFriend"
import {startButtonShow} from "../../../../../store/actions/welcome"
import {infoDisplaySaveOn} from "../../../../../store/actions/infoDisplay";

const RestartGame = () => {
  const dispatch = useDispatch()

  const restartGameHandler = () => {
    dispatch(losingOff())
    dispatch(currentWinningsSum())
    dispatch(fullWinningsRestart())
    dispatch(restartQuestion())
    dispatch(oneHelpOff())
    dispatch(updateTimer())
    dispatch(fiftyDeleteClick())
    dispatch(hallHelpDeleteClick())
    dispatch(callFriendDeleteClick())
    dispatch(fiftyOtherClickOn())
    dispatch(callFriendOtherClickOn())
    dispatch(hallHelpOtherClickOk())
    dispatch(startButtonShow())
    dispatch(winnerOff())
    dispatch(infoDisplaySaveOn())
  }

  return (
    <Button
      variant="outlined"
      color={"primary"}
      onClick={() => restartGameHandler()}
    >
      Начать игру заново
    </Button>
  )
}

export default RestartGame