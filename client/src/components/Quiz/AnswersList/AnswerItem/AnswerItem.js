import React, {useEffect} from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {addRightAnswerLetter} from "../../../../store/actions/quiz"
import answerItemStyles from "./answerItemStyles"

const AnswerItem = props => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const rightAnswerId = useSelector(state => state.quizReducer.randomQuiz[currentQuestion].rightAnswerId)

  const classes = answerItemStyles()

  function firstUppercase(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1)
  }

  useEffect(() => {
    if (rightAnswerId === props.answer.id) {
      dispatch(addRightAnswerLetter(props.answer.letter))
    }
  }, [rightAnswerId, dispatch, props.answer.id, props.answer.letter])

  return (
    <Grid item xs={6}>
      <Paper
        data-answer-id={props.answer.id}
        onClick={(event) => props.answerClick(props.answer.id, event)}
        className={classes.item}
        elevation={3}
      >
        <Typography variant="inherit">{props.answer.letter}: </Typography>
        <Typography variant="inherit" className={"quiz__text"}>{firstUppercase(props.answer.text)}</Typography>
      </Paper>
    </Grid>
  )
}

export default AnswerItem