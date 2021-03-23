import {useEffect} from "react"
import {Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {secondsDecrement} from "../../../../store/actions/timer"
import timerStyles from './timerStyles'

const Timer = () => {
  const dispatch = useDispatch()
  const seconds = useSelector(state => state.timerReducer.seconds)
  const timerState = useSelector(state => state.timerReducer.timerState)
  const startButtonState = useSelector(state => state.welcomeReducer.startButtonState)

  const classes = timerStyles()

  useEffect(() => {
    const milliseconds = 1000
    let timer = null
    if (seconds > 0 && timerState) {
      timer = setTimeout(function tick() {
        dispatch(secondsDecrement())
        timer = setTimeout(tick, milliseconds)
      }, milliseconds)
    }
    return () => {
      clearInterval(timer)
    }
  }, [timerState, seconds, dispatch])

  return (
    <>
      {
        startButtonState ?
          null :
          <Typography
            variant="h2"
            align="center"
            className={classes.timer}
          >
            {seconds}
          </Typography>
      }
    </>
  )
};

export default Timer