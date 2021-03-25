import React, {useEffect, useState} from 'react'
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import {Paper} from "@material-ui/core"
import wrapperMessageStyles from './wrapperMessageStyles'
import {useSelector} from "react-redux"

const WrapperMessage = props => {
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)
  const [closePaper, setClosePaper] = useState(true)
  const [closeIcon, setCloseIcon] = useState(true)

  const classes = wrapperMessageStyles()

  const closeHandler = () => {
    setClosePaper(false)
  }

  useEffect(() => {
    if (currentQuestion) {
      setClosePaper(true)
    }
  }, [currentQuestion])

  useEffect(() => {
    if (props.close === false) {
      setCloseIcon(false)
    }
  }, [props.close])

  return (
    closePaper ?
    <Paper elevation={3} className={classes.paper}>
      {closeIcon ?
        <CancelPresentationIcon
          className={classes.iconClose}
          onClick={closeHandler}
        /> :
        null}
      {props.children}
    </Paper> :
      null
  )
}

export default WrapperMessage