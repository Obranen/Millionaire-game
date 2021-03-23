import {Avatar, Grid,} from "@material-ui/core"
import HallHelp from "./HallHelp/HallHelp"
import Fifty from "./Fifty/Fifty"
import CallFriend from "./CallFriend/CallFriend"
import './Assist.scss'
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect} from "react"
import {oneHelpOn} from "../../../store/actions/assist"
import assistStyles from './assistStyles'

const Assist = () => {
  const dispatch = useDispatch()
  const hallHelpDisable = useSelector(state => state.hallHelpReducer.hallHelpDisable)
  const fiftyDisable = useSelector(state => state.fiftyReducer.fiftyDisable)
  const callFriendDisable = useSelector(state => state.callFriendReducer.callFriendDisable)
  const losing = useSelector(state => state.quizReducer.losing)
  const winner = useSelector(state => state.quizReducer.winner)

  const classes = assistStyles()

  useEffect(() => {
    if (fiftyDisable) {
      dispatch(oneHelpOn())
    }
    if (hallHelpDisable) {
      dispatch(oneHelpOn())
    }
    if (callFriendDisable) {
      dispatch(oneHelpOn())
    }
  })

  return (
    <Grid
      item
      xs={1}
    >
      {losing || winner ?
        null :
        <>
          <Avatar variant="rounded" className={classes.success}>
            <Fifty/>
          </Avatar>
          <Avatar variant="rounded" className={classes.success}>
            <HallHelp/>
          </Avatar>
          <Avatar variant="rounded" className={classes.success}>
            <CallFriend/>
          </Avatar>
        </>}
    </Grid>
  )
}

export default Assist