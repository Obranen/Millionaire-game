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
import {timerHideAction, timerOn, timerStop, updateTimer} from "../../store/actions/timer"
import quizStyles from './quizStyles'

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

  const classes = quizStyles()

  const answerClickHandler = (answerID, event) => {
    let target = event.target
    const milliseconds = 4500
    const maxQuestions = 14

    if (target.tagName !== ('DIV')) {
      target = target.closest('div')
    }

    if (repeatedClick) {
      setRepeatedClick(false)
      if (rightAnswerId === answerID) {
        target.classList.add(classes.success)
        dispatch(timerStop())

        const timeout = window.setTimeout(() => {
          if (textContent) {
            dispatch(hideTextContent())
          }

          dispatch(oneHelpOff())
          dispatch(updateTimer())

          if (currentQuestion !== maxQuestions) {
            dispatch(nextQuestion())

            if (fiftyState) {
              let $itemAnswer = document.querySelectorAll('.fifty-item-hidden')
              $itemAnswer.forEach(item => {
                item.classList.remove('fifty-item-hidden')
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

          target.classList.remove(classes.success)
          window.clearTimeout(timeout)
          setRepeatedClick(true)
          dispatch(timerOn())
        }, milliseconds)
      } else {
        target.classList.add(classes.error)
        dispatch(timerStop())
        const timeout = window.setTimeout(() => {
          target.classList.remove(classes.error)
          dispatch(losingOn())
          window.clearTimeout(timeout)
          setRepeatedClick(true)
          dispatch(timerHideAction())
        }, milliseconds)

        if (fiftyState) {
          dispatch(fiftyDeleteClick())
        }
        if (hallHelp) {
          dispatch(hallHelpDeleteClick())
        }
        if (callFriend) {
          dispatch(callFriendDeleteClick())
        }
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