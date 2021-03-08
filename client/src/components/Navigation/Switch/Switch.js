import {Switch} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {themeStateOff, themeStateOn} from "../../../store/actions/switch"
import {useEffect} from "react"

function SwitchTheme() {
  const themeState = useSelector(state => state.switchReducer.themeState)
  const dispatch = useDispatch()

  useEffect(() => {
    const $bodyCls = document.body.classList
    themeState ? $bodyCls.remove('lightTheme') || $bodyCls.add('darkTheme') : $bodyCls.remove('darkTheme') || $bodyCls.add('lightTheme')
  }, [themeState])

  const themeStateHandler = () => {
    if (themeState) {
      dispatch(themeStateOff())
    } else {
      dispatch(themeStateOn())
    }
  }

  return (
    <Switch onChange={themeStateHandler}/>
  )
}

export default SwitchTheme