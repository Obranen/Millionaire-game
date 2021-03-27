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
                  <WrapperMessage
                    close={false}
                  >
                    <p>Ваше время вышло!</p>
                    <RestartGame/>
                  </WrapperMessage>
                  :
                  <WrapperMessage
                    close={false}
                  >
                    <SaveGame/>
                    <p>Ваше время вышло!</p>
                    <p>Ваш выйгрыш {numberWithSpaces({number: currentWinningsMoney})} &#8372;</p>
                    <RestartGame/>
                  </WrapperMessage>
              }
            </>
            :
            <>
              {
                currentWinningsMoney === undefined ?
                  <WrapperMessage
                    close={false}
                  >
                    <div>Не правильный ответ!</div>
                    <RestartGame/>
                  </WrapperMessage>
                  :
                  <WrapperMessage
                    close={false}
                  >
                    <SaveGame/>
                    <p>Не правильный ответ!</p>
                    <p>Ваш выйгрыш {numberWithSpaces({number: currentWinningsMoney})} &#8372;</p>
                    <RestartGame/>
                  </WrapperMessage>
              }
            </>
          :
          <WrapperMessage
            close={false}
          >
            <div>Ваш выйгрыш {numberWithSpaces({number: currentWinningsMoney})} &#8372;</div>
            <p>Для сохранения результата Авторизуйтесь</p>
            <RestartGame/>
          </WrapperMessage>
      }
    </>
  )
}

export default LostGame