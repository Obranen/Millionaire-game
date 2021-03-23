import {Grid} from "@material-ui/core"
import Timer from "./Timer/Timer"
import InfoDisplay from "./InfoDisplay/InfoDisplay"
import viewWindowLightStyles from './viewWindowLightStyles'
import viewWindowDarkStyles from './viewWindowDarkStyles'
import {useSelector} from "react-redux";

const ViewWindow = () => {
  const themeState = useSelector(state => state.switchReducer.themeState)

  const classesLightTheme = viewWindowLightStyles()
  const classesDarkTheme = viewWindowDarkStyles()

  return (
    <Grid item xs={9} className={themeState ? classesDarkTheme.background : classesLightTheme.background}>
      <Timer/>
      <InfoDisplay/>
    </Grid>
  )
}

export default ViewWindow