import React from 'react'
import {Button, Typography} from "@material-ui/core"
import RestartGame from "../RestartGame/RestartGame"
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
import SaveGame from "../SaveGame/SaveGame"

const WinnerGame = () => {
  const authenticated = useSelector(state => state.authReducer.authenticated)
  const fullWinningsMoney = useSelector(state => state.progressLevelReducer.fullWinningsMoney)

  return (
    <>
      {
        authenticated ?
          <>
            <Typography variant={'h5'} align={'center'} display={"block"}>
              Вы Победили! Текущий выйгрыш {fullWinningsMoney}&#8372;
            </Typography>
						<SaveGame/>
            <RestartGame/>
          </>
          :
          <Typography variant={'h5'} align={'center'} display={"block"}>
            Вы Победили! Текущий выйгрыш {fullWinningsMoney}&#8372;
            <RestartGame/>
            <hr/>
            Для сохранения результата Авторизуйтесь
            <Button to="/auth" component={NavLink}>
              Вход/Регистрация
            </Button>
          </Typography>
      }
    </>
  )
}

export default WinnerGame