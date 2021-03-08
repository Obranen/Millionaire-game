import React from "react"
import AnswerItem from "./AnswerItem/AnswerItem"

const AnswersList = props => {
  return (
    <>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            answerClick={props.answerClick}
          />
        )
      })}
    </>
  )
}

export default AnswersList