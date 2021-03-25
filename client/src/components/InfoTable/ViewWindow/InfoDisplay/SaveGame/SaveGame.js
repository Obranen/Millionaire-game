import React from 'react'
import {Button} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {saveGameLost, saveGameWin} from "../../../../../store/actionsAsync/winner"
import {infoDisplaySaveOff} from "../../../../../store/actions/infoDisplay"

const SaveGame = () => {
  const dispatch = useDispatch();
  const fullWinningsMoney = useSelector(state => state.progressLevelReducer.fullWinningsMoney)
  const currentWinningsMoney = useSelector(state => state.progressLevelReducer.currentWinningsMoney)
  const winner = useSelector(state => state.quizReducer.winner)
  const losing = useSelector(state => state.quizReducer.losing)
  const displaySave = useSelector(state => state.infoDisplayReducer.displaySave)

  const saveGameHandler = () => {
    if (winner) {
      dispatch(saveGameWin(fullWinningsMoney))
    }
    if (losing) {
      dispatch(saveGameLost(currentWinningsMoney))
    }
    dispatch(infoDisplaySaveOff())
  }

  return (
    <>
      {
        displaySave ?
          <Button
            variant="outlined"
            color="primary"
            onClick={() => saveGameHandler()}
          >
            Сохранить игру
          </Button> :
          null
      }
    </>
  )
}

export default SaveGame