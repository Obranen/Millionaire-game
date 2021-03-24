import React from 'react'
import RestartGame from "../RestartGame/RestartGame"
import {useSelector} from "react-redux"
import SaveGame from "../SaveGame/SaveGame"
import WrapperMessage from "../../../../../ui/WrapperMessage/WrapperMessage";

const WinnerGame = () => {
  const authenticated = useSelector(state => state.authReducer.authenticated)
  const fullWinningsMoney = useSelector(state => state.progressLevelReducer.fullWinningsMoney)

  function numberWithSpaces({number}) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <>
      {
        authenticated ?
          <>
            <WrapperMessage content={`Вы Победили! Текущий выйгрыш ${numberWithSpaces({number: fullWinningsMoney})} гривень`}/>
            <WrapperMessage content={<SaveGame/>}/>
            <WrapperMessage content={<RestartGame/>}/>
          </>
          :
          <>
            <WrapperMessage content={`Вы Победили! Текущий выйгрыш ${numberWithSpaces({number: fullWinningsMoney})} гривень`}/>
            <WrapperMessage content={`Для сохранения результата Авторизуйтесь`}/>
          </>
      }
    </>
  )
}

export default WinnerGame