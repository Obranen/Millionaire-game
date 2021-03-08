import React, {useState} from 'react'
import {Grid} from "@material-ui/core"
import AnswersList from "./AnswersList/AnswersList"
import Question from "./Question/Question"
import {useDispatch, useSelector} from "react-redux"
import {
  losingOn,
  nextQuestion,
  winnerOn,
} from "../../store/actions/quiz"
import './Quiz.scss'
import {
  hideTextContent, oneHelpOff,
} from "../../store/actions/assist"
import {
  callFriendDeleteClick,
} from "../../store/actions/callFriend"
import {
  fiftyDeleteClick,
} from "../../store/actions/fifty"
import {
  hallHelpDeleteClick,
} from "../../store/actions/hallHelp"
import {timerStop, updateTimer} from "../../store/actions/timer"

const Quiz = () => {
  const dispatch = useDispatch()
  const randomQuiz = useSelector(state => state.quizReducer.randomQuiz)
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const rightAnswerId = useSelector(state => state.quizReducer.randomQuiz[currentQuestion].rightAnswerId)
  const fiftyState = useSelector(state => state.fiftyReducer.fiftyState)
  const hallHelp = useSelector(state => state.hallHelpReducer.hallHelp)
  const callFriend = useSelector(state => state.callFriendReducer.callFriend)
  const textContent = useSelector(state => state.assistReducer.textContent)
  const [repeatedClick, setRepeatedClick] = useState(true)

  const answerClickHandler = (answerID, event) => {
    let target = event.target
    const milliseconds = 2000

    if (target.tagName !== ('DIV')) {
      target = target.closest('div')
    }

    if (repeatedClick) {
      setRepeatedClick(false)
      if (rightAnswerId === answerID) {
        target.classList.add('answer-success')

        const timeout = window.setTimeout(() => {
          if (textContent) {
            dispatch(hideTextContent())
          }

          dispatch(oneHelpOff())
          dispatch(updateTimer())

          if (currentQuestion !== 14) {
            dispatch(nextQuestion())

            if (fiftyState) {
              let $itemAnswer = document.querySelectorAll('.assist-hide')
              $itemAnswer.forEach(item => {
                item.classList.remove('assist-hide')
              })
              dispatch(fiftyDeleteClick())
            }
            if (hallHelp) {
              dispatch(hallHelpDeleteClick())
            }
            if (callFriend) {
              dispatch(callFriendDeleteClick())
            }
          } else {
            dispatch(winnerOn())
            console.log('Конец игры!')
          }

          target.classList.remove('answer-success')
          window.clearTimeout(timeout)
          setRepeatedClick(true)
        }, milliseconds)
      } else {
        target.classList.add('answer-error')
        dispatch(timerStop())
        const timeout = window.setTimeout(() => {
          target.classList.remove('answer-error')
          dispatch(losingOn())
          window.clearTimeout(timeout)
          setRepeatedClick(true)
        }, milliseconds)
      }
    }
  }

  return (
    <Grid container spacing={3}>
      <Question
        question={randomQuiz[currentQuestion].question}
      />
      <AnswersList
        answers={randomQuiz[currentQuestion].answers}
        answerClick={answerClickHandler}
      />
    </Grid>
  )
}

export default Quiz