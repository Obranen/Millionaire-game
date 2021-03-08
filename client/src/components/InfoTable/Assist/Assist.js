import {Grid, Paper} from "@material-ui/core"
import HallHelp from "./HallHelp/HallHelp"
import Fifty from "./Fifty/Fifty"
import CallFriend from "./CallFriend/CallFriend"
import './Assist.scss'
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {oneHelpOn} from "../../../store/actions/assist"

const Assist = () => {
  const dispatch = useDispatch()
  const hallHelpDisable = useSelector(state => state.hallHelpReducer.hallHelpDisable)
  const fiftyDisable = useSelector(state => state.fiftyReducer.fiftyDisable)
  const callFriendDisable = useSelector(state => state.callFriendReducer.callFriendDisable)
  const losing = useSelector(state => state.quizReducer.losing)
  const winner = useSelector(state => state.quizReducer.winner)

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
    <Grid item xs={3}>
      {
        losing || winner ?
          null :
          <Paper>
            <Fifty/>
            <HallHelp/>
            <CallFriend/>
          </Paper>
      }
    </Grid>
  )
}

export default Assist