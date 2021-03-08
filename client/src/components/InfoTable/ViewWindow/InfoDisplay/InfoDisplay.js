import {Box, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {useCallback, useEffect, useState} from "react"
import {showTextContent} from "../../../../store/actions/assist"
import {timerStop} from "../../../../store/actions/timer"
import {losingOn} from "../../../../store/actions/quiz"
import WinnerGame from "./WinnerGame/WinnerGame"
import LostGame from "./LostGame/LostGame";

const InfoDisplay = () => {
  const dispatch = useDispatch()
  const [returnableContent, setReturnableContent] = useState(null)
  const winner = useSelector(state => state.quizReducer.winner)
  const rightAnswerLetter = useSelector(state => state.quizReducer.rightAnswerLetter)
  const losing = useSelector(state => state.quizReducer.losing)
  const fiftyState = useSelector(state => state.fiftyReducer.fiftyState)
  const hallHelp = useSelector(state => state.hallHelpReducer.hallHelp)
  const callFriend = useSelector(state => state.callFriendReducer.callFriend)
  const seconds = useSelector(state => state.timerReducer.seconds)

  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }

  const randomArrayValue = array => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const hallHelpContent = useCallback(() => {
    const total = 100
    const min = 12
    const max = 32

    const number1 = randomInteger(min, max)
    const number2 = randomInteger(min, max)
    const number3 = randomInteger(min, max)

    const rightNumberAnswer = total - (number1 + number2 + number3)

    let textContent
    switch (rightAnswerLetter) {
      case 'A':
        textContent = `${rightAnswerLetter}: ${rightNumberAnswer}% B: ${number1}% C: ${number2}% D: ${number3}`
        break
      case 'B':
        textContent = `A: ${number1}% ${rightAnswerLetter}: ${rightNumberAnswer}% C: ${number2}% D: ${number3}`
        break
      case 'C':
        textContent = `A: ${number1}% B: ${number2}% ${rightAnswerLetter}: ${rightNumberAnswer}% D: ${number3}`
        break
      case 'D':
        textContent = `A: ${number1}% B: ${number2}%  C: ${number3} ${rightAnswerLetter}: ${rightNumberAnswer}%`
        break
      default:
        console.log("Нет таких значений")
    }
    setReturnableContent(textContent)
  }, [rightAnswerLetter])

  const callFriendContent = useCallback(() => {
    const min = 1
    const max = 10
    const number = randomInteger(min, max)

    let trueContext
    if (number > 4) {
      trueContext = `Я думаю правильный ответ - ${rightAnswerLetter}(правильно)`
    } else {
      const lettersAnswer = ['A', 'B', 'C', 'D']
      const wrongLettersAnswer = lettersAnswer.filter(letter => letter !== rightAnswerLetter)
      const letterAnswer = randomArrayValue(wrongLettersAnswer)
      trueContext = `Я думаю правильный ответ - ${letterAnswer}(не правильный)`
    }
    setReturnableContent(trueContext)
  }, [rightAnswerLetter])

  useEffect(() => {
    if (callFriend) {
      dispatch(showTextContent())
      callFriendContent()
    }
  }, [callFriend, dispatch, callFriendContent])

  useEffect(() => {
    if (hallHelp) {
      dispatch(showTextContent())
      hallHelpContent()
    }
  }, [hallHelp, dispatch, hallHelpContent])

  useEffect(() => {
    if (winner) {
      dispatch(timerStop())
    }
  }, [winner, dispatch])

  useEffect(() => {
    if (seconds === 0) {
      dispatch(losingOn())
    }
  }, [seconds, dispatch])

  return (
    <Box>
      {
        fiftyState ?
          <Typography variant={'h5'} align={'center'} display={"block"}>
            Компьютер убрал два неправильных ответа.
          </Typography> :
          null
      }

      {
        hallHelp ?
          <Typography variant={'h5'} align={'center'} display={"block"}>
            {returnableContent}
          </Typography> :
          null
      }

      {
        callFriend ?
          <Typography variant={'h5'} align={'center'} display={"block"}>
            {returnableContent}
          </Typography> :
          null
      }

      {winner ? <WinnerGame/> : null}

      {losing ? <LostGame/> : null}
    </Box>
  )
}

export default InfoDisplay