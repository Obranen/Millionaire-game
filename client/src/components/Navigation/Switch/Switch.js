import {Switch} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {themeStateOff, themeStateOn} from "../../../store/actions/switch"

function SwitchTheme() {
  const themeState = useSelector(state => state.switchReducer.themeState)
  const dispatch = useDispatch()

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