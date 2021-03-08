import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {timerOn} from "../../store/actions/timer"
import {startButtonHide} from "../../store/actions/welcome"
import {quizAddRandomQuiz} from "../../store/actions/quiz";

const Welcome = () => {
  const dispatch = useDispatch()
  const startButtonState = useSelector(state => state.welcomeReducer.startButtonState)
  const quiz = useSelector(state => state.quizReducer.quiz)

  const randomArray = ({array}) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const createRandomQuiz = () => {
    const cloneQuiz = [...quiz]
    const maxCloneQuiz = cloneQuiz.slice(0,15)
    dispatch(quizAddRandomQuiz(randomArray({array: maxCloneQuiz})))
  }

  const startGameHandler = () => {
    dispatch(startButtonHide())
    dispatch(timerOn())
    createRandomQuiz()
  }

  return (
    <>
      {
        startButtonState ?
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => startGameHandler()}>Начать Игру</Button>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque eligendi modi numquam
              optio quae tenetur vero. Architecto consectetur consequatur cupiditate, dignissimos dolor earum minus
              natus quibusdam quo reiciendis ullam!
            </Typography>
          </Grid>
          :
          null
      }
    </>
  )
}

export default Welcome