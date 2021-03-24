import React from 'react'
import RestartGame from "../RestartGame/RestartGame"
import {useSelector} from "react-redux"
import SaveGame from "../SaveGame/SaveGame"
import WrapperMessage from "../../../../../ui/WrapperMessage/WrapperMessage"

const LostGame = () => {
  const currentWinningsMoney = useSelector(state => state.progressLevelReducer.currentWinningsMoney)
  const seconds = useSelector(state => state.timerReducer.seconds)
  const authenticated = useSelector(state => state.authReducer.authenticated)

  function numberWithSpaces({number}) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <>
      {
        authenticated ?
          seconds === 0 ?
            <>
              {
                currentWinningsMoney === undefined ?
                  <>
                    <WrapperMessage content={`Ваше время вышло!`}/>
                    <WrapperMessage content={<RestartGame/>}/>
                  </>
                  :
                  <>
                    <WrapperMessage content={`Ваше время вышло! Ваш выйгрыш ${numberWithSpaces({number: currentWinningsMoney})} гривень`}/>
                    <WrapperMessage content={<RestartGame/>}/>
                    <WrapperMessage content={<SaveGame/>}/>
                  </>
              }
            </>
            :
            <>

              {
                currentWinningsMoney === undefined ?
                  <>
                    <WrapperMessage content={`Не правильный ответ!`}/>
                    <WrapperMessage content={<RestartGame/>}/>
                  </>
                  :
                  <>
                    <WrapperMessage content={`Не правильный ответ! Ваш выйгрыш ${numberWithSpaces({number: currentWinningsMoney})} гривень`}/>
                    <WrapperMessage content={<RestartGame/>}/>
                    <WrapperMessage content={<SaveGame/>}/>
                  </>
              }
            </>
          :
          <>
            <WrapperMessage content={`Ваш выйгрыш ${numberWithSpaces({number: currentWinningsMoney})} гривень`}/>
            <WrapperMessage content={`Для сохранения результата Авторизуйтесь`}/>
            <WrapperMessage content={<RestartGame/>}/>
          </>
      }
    </>
  )
}

export default LostGame