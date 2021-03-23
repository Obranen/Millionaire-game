import React from 'react'
import {Phone} from "@material-ui/icons"
import {Box} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {callFriendClick, callFriendDisableOtherClick} from "../../../../store/actions/callFriend"
import callFriendStyles from './callFriendStyles'

const CallFriend = () => {
  const dispatch = useDispatch()
  const oneHelpPerTurn = useSelector(state => state.assistReducer.oneHelpPerTurn)
  const callFriendDisable = useSelector(state => state.callFriendReducer.callFriendDisable)

  const classes = callFriendStyles()

  const callFriendHandler = event => {
    if (!(oneHelpPerTurn)) {
      if (!(callFriendDisable)) {
        let target = event.target

        if (target.tagName !== ('DIV')) {
          target = target.closest('div')
        }

        dispatch(callFriendClick())
        dispatch(callFriendDisableOtherClick())

        target.classList.add(classes.used)
      }
    }
  }

  return (
    <Box onClick={callFriendHandler}>
      <Phone className={classes.icon}/>
    </Box>
  )
}

export default CallFriend