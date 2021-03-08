import React, {useEffect} from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {addRightAnswerLetter} from "../../../../store/actions/quiz"

const AnswerItem = props => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const rightAnswerId = useSelector(state => state.quizReducer.randomQuiz[currentQuestion].rightAnswerId)

  useEffect(() => {
    if (rightAnswerId === props.answer.id) {
      dispatch(addRightAnswerLetter(props.answer.letter))
    }
  }, [rightAnswerId, dispatch, props.answer.id, props.answer.letter])

  return (
    <Grid item xs={6}>
      <Paper data-answer-id={props.answer.id} onClick={(event) => props.answerClick(props.answer.id, event)}>
        <Typography variant="inherit">{props.answer.letter}: </Typography>
        <Typography variant="inherit" className={"quiz__text"}>{props.answer.text}</Typography>
      </Paper>
    </Grid>
  )
}

export default AnswerItem