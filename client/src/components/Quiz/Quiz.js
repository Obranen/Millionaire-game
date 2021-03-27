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
    const milliseconds = 6000
    const milliseconds2 = 3000
    const maxQuestions = 14

    if (target.tagName !== ('DIV')) {
      target = target.closest('div')
    }

    if (repeatedClick) {
      setRepeatedClick(false)
      target.classList.add(classes.currentSelectedAnswer)

      const timeout = window.setTimeout(() => {
        if (rightAnswerId === answerID) {

          if (target.classList.contains(classes.currentSelectedAnswer)) {
            target.classList.remove(classes.currentSelectedAnswer)
          }

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

          if (target.classList.contains(classes.currentSelectedAnswer)) {
            target.classList.remove(classes.currentSelectedAnswer)
          }

          const $rightAnswer = target.parentNode.parentNode.querySelector(`.MuiPaper-root[data-answer-id="${rightAnswerId}"]`)

          $rightAnswer.classList.add(classes.success)
          target.classList.add(classes.error)
          dispatch(timerStop())
          const timeout = window.setTimeout(() => {
            target.classList.remove(classes.error)
            $rightAnswer.classList.remove(classes.success)
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
        window.clearTimeout(timeout)
      }, milliseconds2)
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