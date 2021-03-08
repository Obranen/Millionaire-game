import React from 'react'
import QuizForm from "./QuizForm/QuizForm"
import QuizTable from "./QuizTable/QuizTable"
import {Typography} from "@material-ui/core";

const AdminQuiz = () => {
  return (
    <>
      <Typography align="center" variant="h4">
        Создание, редактирование и удаление вопросов.
      </Typography>
      <QuizForm/>
      <QuizTable/>
    </>
  )
}

export default AdminQuiz