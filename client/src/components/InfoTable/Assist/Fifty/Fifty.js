import React, {useEffect, useState} from 'react'
import {Box, Tooltip, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {fiftyClick, fiftyDisableOtherClick} from "../../../../store/actions/fifty"
import fiftyStyles from './fiftyStyles'

const Fifty = () => {
  const dispatch = useDispatch()
  const oneHelpPerTurn = useSelector(state => state.assistReducer.oneHelpPerTurn)
  const fiftyDisable = useSelector(state => state.fiftyReducer.fiftyDisable)
  const randomQuiz = useSelector(state => state.quizReducer.randomQuiz)
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const rightAnswerId = useSelector(state => state.quizReducer.randomQuiz[currentQuestion].rightAnswerId)
  const [wrongAnswers, setWrongAnswers] = useState(null)
  const [fifty, setFifty] = useState(false)

  const classes = fiftyStyles()

  useEffect(() => {
    if (fifty) {
      document.querySelector(`.MuiPaper-root[data-answer-id="${wrongAnswers[0]}"]`).classList.add('fifty-item-hidden')
      document.querySelector(`.MuiPaper-root[data-answer-id="${wrongAnswers[1]}"]`).classList.add('fifty-item-hidden')
    }
  }, [fifty, wrongAnswers])

  const answersId = () => {
    return randomQuiz[currentQuestion].answers.map(answer => {
      return answer.id
    })
  }

  const twoWrongAnswers = () => {
    const answerId = answersId()
    answerId.splice(rightAnswerId - 1, 1)

    const wrongAnswers = answerId
      .sort(function () {
        return .5 - Math.random()
      })
      .slice(0, 2)

    return [wrongAnswers[0], wrongAnswers[1]]
  }

  const fiftyHandler = event => {
    if (!(oneHelpPerTurn)) {
      if (!(fiftyDisable)) {
        let target = event.target

        if (target.tagName !== ('DIV')) {
          target = target.closest('div')
        }

        target.classList.add(classes.used)

        setFifty(true)
        dispatch(fiftyClick())
        setWrongAnswers(twoWrongAnswers())
        dispatch(fiftyDisableOtherClick())
      }
    }
  }

  return (
    <Tooltip title="Убрать два неправильных ответа" placement="right">
      <Box onClick={fiftyHandler} className={classes.icon}>
        <Typography variant={'inherit'}>50:50</Typography>
      </Box>
    </Tooltip>
  )
}

export default Fifty