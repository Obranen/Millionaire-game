import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Box, Button, TextField, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {
  quizClickOnButtonEditOff,
  quizStateEditOff,
} from "../../../store/actions/quiz"
import {createQuiz, updateQuiz} from "../../../store/actionsAsync/quiz"
import quizFormStyles from "./quizFormStyles";

const QuizForm = () => {
  const dispatch = useDispatch()
  const quiz = useSelector(state => state.quizReducer.quiz)
  const quizCurrentID = useSelector(state => state.quizReducer.quizCurrentID)
  const quizStateEdit = useSelector(state => state.quizReducer.quizStateEdit)
  const clickOnButtonEdit = useSelector(state => state.quizReducer.clickOnButtonEdit)
  const [form, setForm] = useState({question: '', rightAnswerId: ''})
  const [formAnswers, setFormAnswers] = useState({answerA: '', answerB: '', answerC: '', answerD: ''})
  const questionRef = useRef()
  const rightAnswerIdRef = useRef()
  const answerARef = useRef()
  const answerBRef = useRef()
  const answerCRef = useRef()
  const answerDRef = useRef()

  const classes = quizFormStyles()

  const clearInput = () => {
    document.querySelectorAll('#create-quiz input').forEach(input => {
      input.value = ''
    })
  }

  const clearInputRef = () => {
    questionRef.current.value = ''
    rightAnswerIdRef.current.value = ''
    answerARef.current.value = ''
    answerBRef.current.value = ''
    answerCRef.current.value = ''
    answerDRef.current.value = ''
  }

  const clearForm = () => {
    setForm({question: '', rightAnswerId: ''})
    setFormAnswers({answerA: '', answerB: '', answerC: '', answerD: ''})
  }

  const changeValueAtEdit = () => {
    let currentQuizForEdit = quiz.filter(quiz => quiz._id === quizCurrentID).map(currentQuiz => {
      if (form.question !== '') {
        currentQuiz.question = form.question
      }
      if (form.rightAnswerId !== '') {
        currentQuiz.rightAnswerId = form.rightAnswerId
      }
      if (formAnswers.answerA.text !== undefined) {
        currentQuiz.answers[0].text = formAnswers.answerA.text
      }
      if (formAnswers.answerB.text !== undefined) {
        currentQuiz.answers[1].text = formAnswers.answerB.text
      }
      if (formAnswers.answerC.text !== undefined) {
        currentQuiz.answers[2].text = formAnswers.answerC.text
      }
      if (formAnswers.answerD.text !== undefined) {
        currentQuiz.answers[3].text = formAnswers.answerD.text
      }
      return currentQuiz
    })
    return currentQuizForEdit[0]
  }

  const changeHandler = event => {
    setFormAnswers({
      ...formAnswers, [event.target.name]:
        {
          text: event.target.value,
          letter: event.target.dataset.letter,
          id: event.target.dataset.letterId
        }

    })
    setForm({...form, [event.target.name]: event.target.value})
  }

  const createQuizHandler = () => {
    const newQuiz = {
      question: form.question,
      rightAnswerId: form.rightAnswerId,
      answers: [
        formAnswers.answerA,
        formAnswers.answerB,
        formAnswers.answerC,
        formAnswers.answerD
      ]
    }
    dispatch(createQuiz(newQuiz))
    clearInput()
  }

  const editQuizHandler = () => {
    dispatch(updateQuiz(changeValueAtEdit()))
    clearForm()
    clearInput()
    clearInputRef()
    dispatch(quizClickOnButtonEditOff())
  }

  const cancelQuizHandler = () => {
    clearInputRef()
    dispatch(quizClickOnButtonEditOff())
  }

  const quizStateEditOffCallback = useCallback(() => {
    return dispatch(quizStateEditOff())
  }, [dispatch])

  useEffect(() => {
    if (quizStateEdit) {
      quiz.forEach(quiz => {
        if (quiz._id === quizCurrentID) {
          questionRef.current.value = quiz.question
          rightAnswerIdRef.current.value = quiz.rightAnswerId
          answerARef.current.value = quiz.answers[0].text
          answerBRef.current.value = quiz.answers[1].text
          answerCRef.current.value = quiz.answers[2].text
          answerDRef.current.value = quiz.answers[3].text
        }
      })

      quizStateEditOffCallback()
    }
  }, [quizStateEdit, quizStateEditOffCallback, quiz, quizCurrentID])

  return (
    <>
      <Typography align="center" variant="h4">
        Создать вопрос
      </Typography>
      <form id={'create-quiz'} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="question"
          label="Вопрос"
          name="question"
          autoFocus
          onChange={changeHandler}
          inputRef={questionRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="rightAnswerId"
          label="Правильный ответ - 'id'"
          name="rightAnswerId"
          onChange={changeHandler}
          inputRef={rightAnswerIdRef}
        />
        <Typography className={classes.header} variant="h5">
          Варианты ответов:
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answerA"
          label="Ответ - 'A'"
          id="answerA"
          inputProps={{
            'data-letter': 'A',
            'data-letter-id': 1
          }}
          onChange={changeHandler}
          inputRef={answerARef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answerB"
          label="Ответ - 'B'"
          id="answerB"
          inputProps={{
            'data-letter': 'B',
            'data-letter-id': 2
          }}
          onChange={changeHandler}
          inputRef={answerBRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answerC"
          label="Ответ - 'C'"
          id="answerC"
          inputProps={{
            'data-letter': 'C',
            'data-letter-id': 3
          }}
          onChange={changeHandler}
          inputRef={answerCRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="answerD"
          label="Ответ - 'D'"
          id="answerD"
          inputProps={{
            'data-letter': 'D',
            'data-letter-id': 4
          }}
          onChange={changeHandler}
          inputRef={answerDRef}
        />
        {clickOnButtonEdit ?
          <Box className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={editQuizHandler}
              size={"large"}
            >
              Редактировать
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={cancelQuizHandler}
              size={"large"}
            >
              Отменить
            </Button>
          </Box> :
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={createQuizHandler}
            size={"large"}
            className={classes.createButton}
          >
            Создать новый вопрос
          </Button>}
      </form>
    </>
  )
}

export default QuizForm