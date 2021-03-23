import React, {useEffect, useState} from 'react'
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import {Paper} from "@material-ui/core"
import wrapperMessageStyles from './wrapperMessageStyles'
import {useSelector} from "react-redux"
import MessageContent from "./MessageContent/MessageContent";

const WrapperMessage = props => {
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const [closePaper, setClosePaper] = useState(true)

  const classes = wrapperMessageStyles()

  const closeHandler = () => {
    setClosePaper(false)
  }

  useEffect(() => {
    if (currentQuestion) {
      setClosePaper(true)
    }
  }, [currentQuestion])

  return (
    closePaper ?
    <Paper elevation={3} className={classes.paper}>
      <CancelPresentationIcon
        className={classes.iconClose}
        onClick={closeHandler}
      />
      <MessageContent>
        {props.content}
      </MessageContent>
    </Paper> :
      null
  )
}

export default WrapperMessage