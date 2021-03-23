import React from 'react'
import {People} from "@material-ui/icons"
import {Box} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {hallHelpClick, hallHelpDisableOtherClick,} from "../../../../store/actions/hallHelp"
import hallHelpStyles from './hallHelpStyles'

const HallHelp = () => {
  const dispatch = useDispatch()
  const hallHelpDisable = useSelector(state => state.hallHelpReducer.hallHelpDisable)
  const oneHelpPerTurn = useSelector(state => state.assistReducer.oneHelpPerTurn)

  const classes = hallHelpStyles()

  const hallHelpHandler = event => {
    if (!(oneHelpPerTurn)) {
      if (!(hallHelpDisable)) {
        let target = event.target

        if (target.tagName !== ('DIV')) {
          target = target.closest('div')
        }

        dispatch(hallHelpClick())
        dispatch(hallHelpDisableOtherClick())

        target.classList.add(classes.used)
      }
    }
  }

  return (
    <Box onClick={hallHelpHandler}>
      <People className={classes.icon}/>
    </Box>
  )
}

export default HallHelp