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
          <WrapperMessage
            close={false}
          >
            <SaveGame/>
            <p>Вы Победили! Текущий выйгрыш {numberWithSpaces({number: fullWinningsMoney})} &#8372;</p>
            <RestartGame/>
          </WrapperMessage>
          :
          <WrapperMessage
            close={false}
          >
            <div>Вы Победили! Текущий выйгрыш {numberWithSpaces({number: fullWinningsMoney})} &#8372;</div>
            <p>Для сохранения результата Авторизуйтесь</p>
            <RestartGame/>
          </WrapperMessage>
      }
    </>
  )
}

export default WinnerGame